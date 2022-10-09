import { useState } from 'react'
import { useLogin } from 'hooks/useLogin'

const styles = {
    login: {
        margin: '40px auto',
        padding: '10em',
        background: '#fff',
        borderRadius: '4px'

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

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
        await login(email, password)
    }

    return (
        <form style={styles.login} onSubmit={handleSubmit}>
            <h3>Log in</h3>

            <label>Email</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button disabled={isLoading}>Log in</button>
            {error && <div style={styles.error}>{error}</div>}
        </form>
    )
}

export default Login