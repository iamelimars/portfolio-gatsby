import React, {Component} from 'react'
import Layout from '../components/layout/layout'
import Fade from 'react-reveal/Fade';

import Contact from '../components/home/contact-section'


class contact extends Component {
    render() {
        return (
            <Layout>
                <Fade top>
                    <h1 style={styles.title}>Contact Me<span style={styles.titleSpan}>.</span> </h1>
                </Fade>
                <Contact />
            </Layout>
        )
    }
}

export default contact

const styles = {
    title: {
        color: '#FF5851',
        paddingTop: '70px',
        marginBottom: '-100px',
        paddingLeft: '50px'
    },
    titleSpan: {
        color: '#272e40'
    }
}