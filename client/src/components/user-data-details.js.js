const styles = {
    UserDataDetailContainer: {
        background: '#fff',
        borderRadius: '4px',
        margin: '20px auto',
        padding: '20px',
        position: 'relative',
        boxShadow: '2px 2px 5px rgba(0,0,0,0.5)'
    },
}

const UserDataDetails = ({ userData }) => {
    return (
        <div style={styles.UserDataDetailContainer}>
            <h4>{userData._id}</h4>
            <p><strong>Score: </strong> {userData.scores}</p>
            <p><strong>Transcript: </strong> {userData.transcript}</p>
            <p>{userData.createdAt}</p>
        </div>
    )
}

export default UserDataDetails