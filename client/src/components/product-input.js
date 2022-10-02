import React, { Component, useEffect, useState } from 'react';

// Speech to text recognition modules
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

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
        height: '55em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // 
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

export default function ProductInput() {
  // Import variables from speech recognition hook
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('http://localhost:5000/api/userData/')
      const json = await response.json()

      // if (response.ok) (
        
      // )
    }
    fetch('http://localhost:5000/api/userData/').then(
      response => response.json()
    ).then(
      json => setBackendData({json})
    )
    console.log(backendData, 'hi')
  }, [])

  // const sendData = async (e) => {
  //   // e.preventDefault()
  //   const userData = {transcript, scores: [2, 3], id: '123'}

  //   const response = await fetch('http://localhost:5000/api/userData', {
  //     method: "POST",
  //     headers: {
  //         'Content-Type': 'application/json', 
  //     },
  //     body: JSON.stringify.userData
  //   });

  //   const json = await response.json

  //   if (!response.ok) {
  //     console.log(json.error)
  //   }
  //   if (response.ok) {
  //     alert('Data added')
  //     console.log('data added')
  //   }
  //   // }
  //   // fetch('http://localhost:5000/api/userData', options).then(
  //   //   response => response.json()
  //   // ).then(
  //   //   data => {
  //   //     setBackendData(data)
  //   //   }
  //   // )
  //   // console.log("data sent to mongodb clicked")
  // }

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
          {(typeof backendData.data === 'undefined') ? (
            <p>Loading...</p>
          ) : (
            backendData.map((data, i) => (
              <p key={i}>{data}</p>
            ))
          )}
          <button onClick={() => console.log(backendData)}>Debug backendData</button>
          <button onClick={() => sendData()}>send data</button>
      </div>

  );
}

