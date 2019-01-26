import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const tutorialsSection = () => (
    <section style={styles.container}>
        <h1 style={styles.title}>Courses, Tutorials & <br/> Blog posts</h1>
        <AniLink style={styles.button} cover direction="up" duration={1} to="tutorials" bg="#FF5354">
            Explore
        </AniLink>
    </section>
)

export default tutorialsSection

const styles = {
    container: {
        backgroundColor: '#4AAADC',
        width: '50%',
        margin: '60px 0',
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
