import React, { Component } from 'react';

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
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // 
    },
    speechBox: {
        borderRadius: '5px',
        height: '90vh',
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

// Speech to text recognition modules
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Product = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();

  // Handle browser support error
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  // Handling microphone setting turned off
  if (!isMicrophoneAvailable) {
    return <span>Enable your microphone to use the web app!</span>
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
      </div>

  );
}

export default Product

// class Product extends Component {
//     constructor() {
//         super()
//         this.state = {
//             speech_to_text: "",
//             is_listening: false,
//         }
//         this.testClick = this.testClick.bind(this)
//     }

//     testClick() {
//       console.log('hello')
//     }

//     render() {
//         return (
//             <div style={styles.container}>
//                 <div style={styles.speechTitle}>Talk to us, tell us about your day...</div>
//                 <div style={styles.speechBox}>

//                 </div>
//                 <button onClick={this.testClick()}>Hello</button>
//             </div>

//         );
//     }

// }

// export default Product;