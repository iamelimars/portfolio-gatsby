import React from 'react'
import Fade from 'react-reveal/Fade'
import anime from 'animejs'


const animation = () => {
    console.log('another test animation');

    var tl = anime.timeline({
        easing: 'easeInOutQuart',
    });

    tl
        .add({
            targets: '.contact-container',
            width: '50%',
            opacity: [0, 1],
            easing: 'easeInOutQuart',
            duration: 800,
        }, 300)
        .add({
            targets: '.contact-info',
            opacity: [0, 1],
            easing: 'easeInOutQuart',
            duration: 800,
        }, 800)
    
}

const contactSection = () => (
    <section >
        <div className="contact-container" style={styles.container}>
            <Fade onReveal={animation}></Fade>
            <h1 className="contact-info" style={styles.title}>Send me an email if you want <br/> to get in contact.</h1>
            <a className="contact-info" id="email-btn" style={styles.button} href="mailto:elimarshall@gmail.com">
                elimarshall@gmail.com
            </a>
        </div>
    </section>
)

export default contactSection

const styles = {
    container: {
        backgroundColor: '#FF5851',
        opacity: [0, 1],
        width: '0%',
        margin: '300px 0 100px auto',
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
