import React, { Component, useEffect, useState } from 'react';
import { BsXCircle } from "react-icons/bs";
import { useUserDataContext } from 'hooks/useUserDataContext';
import { useAuthContext } from 'hooks/useAuthContext';


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
        minWidth: '300px',
        backgroundColor: '#fff',
        border: '1px solid #999',
        borderRadius: '10px',
        zIndex: '3',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
       

    },

    contentContainer: {
        width: '80%'
    },

    closeBtnContainer: {
        width: '90%',
        display: 'flex',
        justifyContent: 'flex-end'
    },

    transcriptContainer: {
        backgroundColor: '#EA3A60',
        padding: '10px',
        borderRadius: '5px',
        minHeight: '140px',
        color: '#fff'
    },

    title: {
        fontSize: '18px'
    },

    textContent: {
        textAlign: 'center',
        fontSize: '18px'
    },

}


export default function ScorePopUpWin ({ callback , list_id }) {
    const { dispatch } = useUserDataContext()
    const { user } = useAuthContext()
    console.log(callback, list_id)

    const handleDelete = async () => {
        if (!user) {
            return
        }

        const response = await fetch('http://localhost:5000/api/userData/' + list_id._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_USERDATA', payload: json})
        }
    }

    return (
        <div style={styles.popUpBoxContainer}>
            <div style={styles.popUpBox}>
                {console.log(list_id)}
                <div style={styles.closeBtnContainer}>
                    <BsXCircle size="1.5em" color='#EA3A60' onClick={callback}/>
                </div>
                
                <div style={styles.contentContainer}>
                    <p style={styles.title}>Score: </p>
                    <p style={styles.textContent}>{list_id.scores}</p>
                    <p style={styles.title}>Transcript: </p>
                    <div style={styles.transcriptContainer}>{list_id.transcript}</div>
                    <p style={styles.title} >Date: {list_id.createdAt}</p>
                </div>
                
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

