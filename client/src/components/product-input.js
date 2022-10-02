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

export default function ProductInput() {
  // Import variables from speech recognition hook
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();

  

  // Hook to fetch user data upon load
  const {user_data, dispatch} = useUserDataContext()

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('http://localhost:5000/api/userData/')
      const json = await response.json()

      // check if response is ok
      if (response.ok) (
        dispatch({type: 'SET_USERDATA', payload: json})
      )
    }

    fetchUserData()
  }, [])

  // testing
  const [id, setId] = useState('123456')
  const [scores, setScores] = useState('182347')
  const userData = {id, scores, transcript}


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
          {user_data && user_data.map((userData) => {
            return (
              <UserDataDetails key={userData._id} userData={userData} />
            )
          })}

          <h1>hi</h1>
          <button onClick={() => console.log(user_data)}>Debug backendData</button>
          <AddUserData userData={userData} />
          {/* <button onClick={() => AddUserData()}>Send data</button> */}
      </div>

  );
}



// import React, { Component, useEffect, useState } from 'react';

// // Speech to text recognition modules
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

// // import context
// import { useUserDataContext } from 'hooks/useUserDataContext';

// const styles = {
//     card: {
//       display: 'flex',
//       alignItems: 'center',
//       flexDirection: 'column',
//       py: [0, null, 4, 5, 6],
//       px: [2, null, 6, 7],
//       transition: 'ease-in-out 0.4s',
//       borderRadius: '8px',
//       position: 'relative',
//       '&:hover': {
//         boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
//         '.info__name': {
//           color: 'primary',
//         },
//         '.info__designation': {
//           color: 'primary',
//         },
//         '.social__share': {
//           opacity: 1,
//           a: {
//             my: 0,
//             py: [0, null, 1],
//           },
//         },
//       },
//     },
//     container: {
//         height: '55em',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         // 
//     },
//     speechBox: {
//         borderRadius: '5px',
//         height: '20em',
//         width: '80%',
//         color: 'white',
//         backgroundColor: '#EA3A60',
//         padding: '10px',
//         fontSize: '30px',
//     },
//     speechTitle: {
//         marginTop: '5em',
//         width: '85%',
//         color: 'rgba(22,22,63, 0.8)',
//         fontWeight: 'lighter',
//         fontSize: '36px',
//         textAlign: 'left',
//         padding: '10px'
//     },
//     speechButtonContainer: {
//         width: '80%',
//         border: '',

//     },
//     speechButton: {
//         display: 'flex',
//         justifyContent: 'center',
//         width: '50%'
//     },

//   };

// export default function ProductInput() {
//   // Import variables from speech recognition hook
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition,
//     isMicrophoneAvailable
//   } = useSpeechRecognition();

//   const [backendData, setBackendData] = useState(null)

//   // Hook to fetch user data upon load
//   useEffect(() => {
//     const fetchUserData = async () => {
//       const response = await fetch('http://localhost:5000/api/userData/')
//       const json = await response.json()

//       // check if response is ok
//       if (response.ok) (
//         setBackendData(json)
//       )
//     }

//     fetchUserData()
//   }, [])

//   const [id, setId] = useState('123456')
//   const [scores, setScores] = useState('67')

//   // function to add user data to DB
//   const AddUserData = async () => {
//     const userData = {id, scores, transcript}

//     const response = await fetch('http://localhost:5000/api/userData/', {
//       method: 'POST',
//       body: JSON.stringify(userData),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     const json = await response.json()

//     if (!response.ok) {
//       console.log('Error')
//     }
//     if (response.ok) {
//       console.log('Data added')
//     }
//   }

//   // Handle browser support error
//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   // Handling microphone setting turned off
//   if (!isMicrophoneAvailable) {
//     return <span style={styles.container}><strong>Enable your microphone to use the web app!</strong></span>
//   }

//   return (
//       <div style={styles.container}>
//           <div style={styles.speechTitle}>Talk to us, tell us about your day...</div>
//           <div style={styles.speechBox}>
//             {transcript}
//           </div>
//           <p>Microphone: {listening ? 'on' : 'off'}</p>
//           <button onClick={() => SpeechRecognition.startListening({
//             continuous: true,
//             language: 'en-US'
//           })}>
//             Start
//           </button>

//           <button onClick={SpeechRecognition.stopListening}>Stop</button>
//           <button onClick={resetTranscript}>Reset</button>
//           {backendData && backendData.map((userData) => {
//             return (
//               <p key={userData._id}>{userData.scores}</p>
//             )
//           })}

//           <h1>hi</h1>
//           <button onClick={() => console.log(backendData)}>Debug backendData</button>
//           <button onClick={() => AddUserData()}>Send data</button>
//       </div>

//   );
// }

