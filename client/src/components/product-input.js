import React, { Component, useEffect, useState } from 'react';

// Speech to text recognition modules
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

// import context
import { useUserDataContext } from 'hooks/useUserDataContext';

// import components
import UserDataDetails from './user-data-details.js';
import AddUserData from './add-user-data.js';

const styles = {
    card: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      py: [0, null, 4, 5, 6],
      px: [2, null, 6, 7],
      transition: 'ease-in-out 0.4s',
      borderRadius: '8px',
      position: 'relative',
      '&:hover': {
        boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
        '.info__name': {
          color: 'primary',
        },
        '.info__designation': {
          color: 'primary',
        },
        '.social__share': {
          opacity: 1,
          a: {
            my: 0,
            py: [0, null, 1],
          },
        },
      },
    },
    container: {
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    speechBox: {
        borderRadius: '5px',
        height: '20em',
        width: '80%',
        color: 'white',
        backgroundColor: '#EA3A60',
        padding: '10px',
        fontSize: '30px',
    },
    speechTitle: {
        marginTop: '5em',
        width: '85%',
        color: 'rgba(22,22,63, 0.8)',
        fontWeight: 'lighter',
        fontSize: '36px',
        textAlign: 'left',
        padding: '10px'
    },
    speechButtonContainer: {
        width: '80%',
        border: '',

    },
    speechButton: {
        display: 'flex',
        justifyContent: 'center',
        width: '50%'
    },

  };

import { useAuthContext } from "hooks/useAuthContext";

export default function ProductInput() {
  // Import variables from speech recognition hook
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();


  const { dispatch } = useUserDataContext()
  const { user } = useAuthContext()
  // testing
  const [id, setId] = useState('123456')
  const [scores, setScores] = useState('182347')
  
  let dataReceived = false


  const handleAdd = async (e) => {

      const user_data = {id, scores, transcript}

      if (!user) {
          console.log('You must be logged in')
          return
      }

      const response = await fetch('http://localhost:5000/api/userData/', {
          method: 'POST',
          body: JSON.stringify(user_data),
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`
          }
      })
      const json = await response.json()

      if (!response.ok) {
          console.log('Error')
      }
      if (response.ok) {
          // dispatching add user data context to update global user_data state
          dispatch({type: 'CREATE_USERDATA', payload: json.userData})
          const feedback = json.feedback
          const score = json.score
          console.log(feedback)
          console.log(score)
          console.log('Data added')
          dataReceived = true
      }
    }

  // Handle browser support error
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  // Handling microphone setting turned off
  if (!isMicrophoneAvailable) {
    return <span style={styles.container}><strong>Enable your microphone to use the web app!</strong></span>
  }

  return (
      <div style={styles.container}>
          <div style={styles.speechTitle}>Talk to us, tell us about your day...</div>
          <div style={styles.speechBox}>
            {transcript}
          </div>
          <p>Microphone: {listening ? 'on' : 'off'}</p>
          <button onClick={() => SpeechRecognition.startListening({
            continuous: true,
            language: 'en-US'
          })}>
            Start
          </button>

          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>

          
          {/* Submit button  */}
          
          <button onClick={() => handleAdd()}>Send data</button>


          
      </div>
  );
}

