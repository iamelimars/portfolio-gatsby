import React from 'react'

const contactSection = () => (
    <section >
        <div style={styles.container}>
            <h1 style={styles.title}>Send me an email if you want <br/> to get in contact.</h1>
            <a id="email-btn" style={styles.button} href="mailto:elimarshall@gmail.com">
                elimarshall@gmail.com
            </a>
        </div>
    </section>
)

export default contactSection

const styles = {
    container: {
        backgroundColor: '#FF5851',
        width: '50%',
        margin: '100px 0 100px auto',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: '90px 50px',
        flexDirection: 'column',
    },
    title: {
        color: '#FFFFFF',
        textAlign: 'right',
        fontSize: '1.7rem'
    },
    button: {
        fontSize: '1.1rem',
        padding: '15px 0',
        marginLeft: '30px',
        borderRadius: '10px',
        color: '#272E40',
        textDecoration: 'none',
        fontWeight: '700'
    }
}
