import { useState } from 'react'
import { useLogin } from 'hooks/useLogin'
import Background from 'assets/login-background.png'
import { useRouter } from 'next/router'

const styles = {
    Container: {
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        width: '100%',
        height: '60em',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    FormContainer: {
        width: '30%', 
        minWidth: '400px',
        maxWidth: '1000px',
        background: '#fff',
        height: 'fit-content',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        borderRadius: '10px',
        padding: '4em'
        
    },

    login: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '4px',

    },

    inputField: {
        margin: '5px',
        padding: '7px',

    },

    feildLabel: {
        marginTop: "50px"
    }, 

    buttonInput: {
        marginTop: '70px',
        padding: '10px',
        border: 'none',
        borderRadius: '10px',
        background: '#f02c56',
        color: "#fff",
        fontSize: '14px',
        cursor: 'pointer'
    },

    title: {
        fontSize: '24px',
    },

    error: {
        padding: '10px',
        background: '#ffefef',
        border: '1px solid #e7195a',
        color: '#e7195a',
        borderRadius: '4px',
        margin: '20px 0'
    }
}



const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
        await login(email, password)

        await !error && router.push('/')        
    }

    return (
        <div style={styles.Container}>

            <div style={styles.FormContainer}>
                <form style={styles.login} onSubmit={handleSubmit}>
                    <h3 style={styles.title}>Log in</h3>

                    <label style={styles.feildLabel}>Email</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder={"Enter email"}
                        style={styles.inputField}
                        className="input-field"
                    />

                    <label style={styles.feildLabel}>Password</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder={"Enter password"}
                        style={styles.inputField}
                        className="input-field"
                    />

                    <button style={styles.buttonInput} disabled={isLoading}>Log in</button>
                    {error && <div style={styles.error}>{error}</div>}
                </form>
            </div>
        </div>  
    )
}

export default Login