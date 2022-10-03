import React, { Component, useEffect, useState } from 'react';

const styles = {
    popUpBoxContainer: {
        zIndex: '2',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        left: '0',
        top: '0',
        width: '100%',
        height: '100vh',
        
    },
    
    popUpBox: {
        position: 'relative',
        width: '50%',
        minHeight: '50vh',
        maxHeight: '50vh',
        backgroundColor: '#fff',
        border: '1px solid #999',
        borderRadius: '10px',
        zIndex: '3',
       

    }

}


export default function ScorePopUpWin ({ callback }) {

    return (
        <div style={styles.popUpBoxContainer}>
            <div style={styles.popUpBox}>
                <button onClick={callback}>Close</button>
            </div>
        </div>
    )
}
