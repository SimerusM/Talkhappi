import React, { Component, useEffect, useState } from 'react';
import DashboardNewBox from 'components/dashboard-new-box'
import DashboardGraph from './dashboard-graph';
import DashboardTalkBox from 'components/dashboard-box';

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
            
        </div>
    
    
    );
}