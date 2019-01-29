import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Fade from 'react-reveal/Fade'
import anime from 'animejs'

const animation = () => {
    console.log('another test animation');

    var tl = anime.timeline({
        easing: 'easeInOutQuart',
    });

    tl
        .add({
            targets: '.tuts-container',
            width: '50%',
            opacity: [0, 1],
            easing: 'easeInOutQuart',
            duration: 800,
        }, 300)
        .add({
            targets: '.tuts-info',
            opacity: [0, 1],
            easing: 'easeInOutQuart',
            duration: 800,
        }, 800)
    
}

const tutorialsSection = () => (
    <section className="tuts-container" style={styles.container}>
        <Fade onReveal={animation}></Fade>
        <h1 className="tuts-info" style={styles.title}>Courses, Tutorials & <br/> Blog posts</h1>
        <AniLink className="tuts-info" style={styles.button} cover direction="up" duration={1} to="tutorials" bg="#FF5354">
            Explore
        </AniLink>
    </section>
)

export default tutorialsSection

const styles = {
    container: {
        backgroundColor: '#4AAADC',
        opacity: '0',
        width: '0%',
        margin: '300px 0 60px 0',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        padding: '90px 50px',
        flexWrap: 'wrap'
    },
    title: {
        color: '#FFFFFF',
        fontSize: '1.7rem'
    },
    button: {
        backgroundColor: '#FFFFFF',
        padding: '15px 40px',
        borderRadius: '10px',
        color: '#272E40',
        textDecoration: 'none',
        fontWeight: '700'
    }
}
