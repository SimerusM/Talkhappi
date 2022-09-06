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




class Product extends Component {
    constructor() {
        super()
        this.state = {
            speech_to_text: "",
            is_listening: false,
        }
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.speechTitle}>Talk to us, tell us about your day...</div>
                <div style={styles.speechBox}>

                </div>
                <button onClick={console.log('hello')}>Hello</button>
            </div>

        );
    }

}



export default Product;




// ERRORS:
// need to fix the scale movement when you say a sentence with less than 40 characters


// ERRORS:
// need to fix the scale movement when you say a sentence with less than 40 characters
