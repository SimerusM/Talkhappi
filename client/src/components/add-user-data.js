import { useState } from "react"

// import context
import { useUserDataContext } from 'hooks/useUserDataContext';

const AddUserData = ({ userData }) => {
    // Hook to fetch user data upon load
    const { dispatch } = useUserDataContext()

    const handleAdd = async () => {
        const response = await fetch('http://localhost:5000/api/userData/', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
        console.log('Error')
        }
        if (response.ok) {
        // dispatching add user data context to update global user_data state
        dispatch({type: 'CREATE_USERDATA', payload: json})
        console.log('Data added')
        }
    }

    return (
        <button onClick={handleAdd}>Add data</button>
    )
}

export default AddUserData