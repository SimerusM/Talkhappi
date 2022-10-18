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
        height: '100%',
        
    },
    
    popUpBox: {
        position: 'relative',
        minHeight: 'auto',
        maxHeight: 'auto',
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

    itemsContainer: {
        width: '100%',
        height: '100%',
        marginTop: '20px',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
     
    }
}


function LoadingSection () {
    return (<>loading</>)
}


function ResultsSection ( { data }) {
    return (<>
        results
    </>)
}

export default function ResultsPopUpWin ({ callback , dataReceived, userData}) {
    return (
        <div style={styles.popUpBoxContainer}>
            <div style={styles.popUpBox} className="popUpWindow">
                <div style={styles.itemsContainer}>   
                    <BsXCircle size="1.5em" color='#EA3A60' onClick={callback}/>

                    {/* loading screen */}
                    {!dataReceived && <LoadingSection/>}

                    {/* results screen */}
                    {(dataReceived && userData) && <ResultsSection data={userData}/>}
                </div>
                
            </div>
        </div>
    )

}
