import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import email from '../../images/004-close-envelope40.svg'
import github from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg'
import instagram from '../../images/instagram.svg'


const footer = () => (
    <div style={styles.container}>
        <div style={styles.social}>
            <a style={styles.socialLink} href="">
                <img width="20px" src={instagram} alt="" />
            </a>
            <a style={styles.socialLink} href="">
                <img width="20px" src={linkedin} alt="" />
            </a>
            <a style={styles.socialLink} href="">
                <img width="20px" src={github} alt="" />
            </a>
            <a style={styles.socialLink} href="">
                <img width="25px" src={email} alt="" />
            </a>
        </div>
        <div style={styles.nav}>
            <AniLink style={styles.navItem} cover direction="up" duration={1} to="" bg="#FF5354">
                Home
            </AniLink>
            <AniLink style={styles.navItem}  cover direction="up" duration={1} to="about" bg="#FF5354">
                About
            </AniLink>
            <AniLink style={styles.navItem}  cover direction="right" duration={1} to="works" bg="#FF5354">
                Works
            </AniLink>
            <AniLink style={styles.navItem}  cover direction="left" duration={1} to="blog" bg="#272E40">
                Tutorials
            </AniLink>
            <AniLink style={styles.navItem}  cover direction="down" duration={1} to="contact" bg="#272E40">
                Contact
            </AniLink>
        </div>
        <div style={styles.rights}><p>Made with ❤️ by <a target="_blank" href="https://github.com/iamelimars">Me</a></p></div>


    </div>
)

export default footer

const styles = {
    container: {
        padding: '40px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    social: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    socialLink: {
        margin: '0 10px',
        
    },
    nav: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    navItem: {
        padding: '15px',
        textDecoration: 'none',
        fontSize: '0.8rem',
        color: '#272E3F',
        transform: 'translateY(0px)'
    },
    rights: {
        fontSize: '0.6rem',
        paddingTop: '7px'
    }
}