
import React, { Component, useEffect, useState } from 'react';
import { BsXCircle } from "react-icons/bs";


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


export default function ScorePopUpWin ({ callback , list_id}) {
    

    return (
        <div style={styles.popUpBoxContainer}>
            <div style={styles.popUpBox}>
                {console.log(list_id)}
                <BsXCircle size="1.5em" color='#EA3A60' onClick={callback}/>
                <p>Score: {list_id.transcript}</p>
                <p>Transcript: {list_id.scores}</p>

                <p>Date: {list_id.createdAt}</p>
                <button>Delete</button>
            </div>
        </div>
    )
}

