import { createContext, useReducer } from 'react'

export const UserDataContext = createContext()

// the previous state value before we make changes to it
export const userdataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERDATA':
            return {
                user_data: action.payload
            }
        case 'CREATE_USERDATA':
            return {
                user_data: [action.payload, ...state.user_data]
            }
        default:
            return state

    }
}

export const UserDataContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userdataReducer, {
        user_data: null
    })

    return (
        <UserDataContext.Provider value={{...state, dispatch}}>
            { children }
        </UserDataContext.Provider>
    )
}