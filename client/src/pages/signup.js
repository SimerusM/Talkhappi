import { useState } from 'react'

const styles = {
    signup: {
        margin: '40px auto',
        padding: '20px',
        background: '#fff',
        borderRadius: '4px'
    },
}

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <form style={styles.signup} onSubmit={handleSubmit}>
            <h3>Sign up</h3>

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

            <button>Sign up</button>
        </form>
    )
}

export default Signup