import React, { Component, useEffect, useState } from 'react';

// componenents
import DashboardNewBox from 'components/dashboard-new-box'
import DashboardGraph from './dashboard-graph';
import DashboardTalkBox from 'components/dashboard-box';
import UserDataDetails from './user-data-details.js';
import ScorePopUpWin from './scorePopUpWin';

// context
import { useUserDataContext } from 'hooks/useUserDataContext';

const styles = {
    dashboardContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        
        
        transition: 'all 0.15s',
        '&:hover': {
            color: '#000000',
            cursor: 'pointer',
        },
        '&.active': {
            color: '#000000',
        },
        
    },
    DashboardBoxContainer: {
        width: '80%',
        display: 'flex',
        gap: '15px',
        marginBottom: '50px',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      

    },
    GraphContainer: {
        margin: '11vh',
        width: '70%',
        backgroundColor: '#FFFFFF',
        padding: '20px',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        borderRadius: '10px'
        
    
    }
}



export default function UserDashboard() {
    const [popUpOpen, setPopUpOpen] = useState(true);

    const { user_data, dispatch } = useUserDataContext()
    useEffect(() => {
        const fetchUserData = async () => {
        const response = await fetch('http://localhost:5000/api/userData/')
        const json = await response.json()
        
        // check if response is ok
        if (response.ok) (
            dispatch({type: 'SET_USERDATA', payload: json})
        )}
    
        fetchUserData()
    }, [dispatch])

    return (
        <div style={styles.dashboardContainer}>
            {/* Pop popup window if state is true, pass a callback function for the close button */}
            {popUpOpen && <ScorePopUpWin callback={() => {setPopUpOpen(!popUpOpen)}}/>}

            <div style={styles.GraphContainer}>
                <DashboardGraph/>
            </div>
            
            
            <div style={styles.DashboardBoxContainer}>

                <DashboardNewBox/>
                <DashboardTalkBox callback={(argu) => {setPopUpOpen(argu)}}/>

            </div>
          
            {user_data && user_data.map((userData) => {
                return (
                    <UserDataDetails key={userData._id} userData={userData} />
                )
            })}
        </div>
    
    
    );
}