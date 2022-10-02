import React, { Component, useEffect, useState } from 'react';
import { BsPlus } from "react-icons/bs";

const styles = {
    NewBoxContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px 35px',
        // border: "solid 2px black"
        boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
    
    }
}

export default function DashboardNewBox() {
    return (
        <div style={styles.NewBoxContainer}>
            <BsPlus size="4em" color='#FEA0FE'/>
            <div>New <br/>Talk!</div>
        </div>
    );
}

