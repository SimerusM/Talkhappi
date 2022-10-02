import React, { Component, useEffect, useState } from 'react';

// componenents
import DashboardNewBox from 'components/dashboard-new-box'
import DashboardGraph from './dashboard-graph';
import DashboardTalkBox from 'components/dashboard-box';
import UserDataDetails from './user-data-details.js';

// context
import { useUserDataContext } from 'hooks/useUserDataContext';

const styles = {
    dashboardContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    DashboardBoxContainer: {
        width: '80%',
        display: 'flex',
        gap: '15px',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',

    },
    GraphContainer: {
        width: '80%'
    }
}



export default function UserDashboard() {
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
        
            <div style={styles.GraphContainer}>
                <DashboardGraph/>
            </div>
            
            
            <div style={styles.DashboardBoxContainer}>

                <DashboardNewBox/>
                <DashboardTalkBox/>
                <DashboardTalkBox/>
                <DashboardTalkBox/>
                <DashboardTalkBox/>
                <DashboardTalkBox/>
                <DashboardTalkBox/>

            </div>
            
            {user_data && user_data.map((userData) => {
                return (
                    <UserDataDetails key={userData._id} userData={userData} />
                )
            })}
        </div>
    
    
    );
}