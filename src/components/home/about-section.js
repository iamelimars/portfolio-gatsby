import React from 'react'
import Radium from 'radium'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'





const aboutSection = (props) => {
    console.log(props);

    return (
        <StaticQuery
            query={graphql`
                query {
                    designImage: file(relativePath: { eq: "georgie-cobbs.jpg" }) {
                        childImageSharp {
                        fluid(maxWidth: 3000) {
                            ...GatsbyImageSharpFluid
                        }
                        }
                    }
                    devImage: file(relativePath: { eq: "maik-jonietz.jpg" }) {
                        childImageSharp {
                        fluid(maxWidth: 3000) {
                            ...GatsbyImageSharpFluid
                        }
                        }
                    }
                    appImage: file(relativePath: { eq: "the-creative-exchange.jpg" }) {
                        childImageSharp {
                        fluid(maxWidth: 3000) {
                            ...GatsbyImageSharpFluid
                        }
                        }
                    }
                }
            `}
            render={data => (
                <section style={styles.container}>
                    <div style={styles.header}>
                        <h1 style={styles.headerTitle}>About<span style={styles.headerSpan}>.</span></h1>
                        <p style={styles.headerContent}>An overview of myself</p>
                    </div>
                    <div style={styles.sectionContainer}>
                        <h1 style={styles.sectionTitle}>Front End Development<span style={styles.sectionTitleSpan}>.</span> </h1>
                        <Img style={styles.sectionImage} fluid={data.devImage.childImageSharp.fluid} />
                        <p style={styles.sectionText}>I am in expert in front end development, with my most proficient language being JavaScript. I am also excellent  in making single page apps with React, Redux, Gatsby & Next.js. My skills are not limited to front end  development, I am also great in PHP Laravel.</p>
                    </div>
                    <div style={styles.sectionContainerLeft}>
                        <Img style={styles.sectionImageLeft} fluid={data.designImage.childImageSharp.fluid} />
                        <h1 style={styles.sectionTitleLeft}>Design<span style={styles.sectionTitleSpan}>.</span> </h1>
                        <p style={styles.sectionTextLeft}>I do UI/UX design for both mobile and web applications using Sketch, Adobe Photoshop, Adobe XD & Figma. I believe that user experience is the second most important element of a website. A great user experience gets user coming back for more.</p>
                    </div>
                    <div style={styles.sectionContainer}>
                        <h1 style={styles.sectionTitle}>App Development<span style={styles.sectionTitleSpan}>.</span> </h1>
                        <Img style={styles.sectionImage} fluid={data.appImage.childImageSharp.fluid} />
                        <p style={styles.sectionText}>I'm an expert in IOS app development with Objective-C and Swift. I am experienced with multithreading, GCD, API integration, design patterns and much more. I also do Android development and some experience in hybrid app development.</p>
                    </div>
                </section>
            )}
        />


    )
}

export default Radium(aboutSection);

let styles = {
    container: {
        minHeight: '1000px',
        background: '#F8F8F8',
        margin: '100px 50px',
        padding: '50px 0'
    },
    header: {
        padding: '30px 80px'
    },
    headerTitle: {
        color: '#FF5851',
        fontSize: '30px'
    },
    headerSpan: {
        color: '#272E40'
    },
    headerContent: {
        fontSize: '15px',
        color: '#9E9E9E',
        fontWeight: 'bold',
        paddingLeft: '70px'
    },

    
    sectionContainer: {
        position: 'static',
        overflow: 'auto',
        height: 'auto',
        marginBottom: '200px',
        paddingBottom: '30px'
    },
    sectionTitle: {
        right: '50px',
        position: 'absolute',
        zIndex: '2',
        fontSize: '30px',
        width: '250px',
        textAlign: 'right',
        color: '#4AAADC',
        marginTop: '-50px',
        marginRight: '20px',
        lineHeight: '50px'
    },
    sectionTitleSpan: {
        color: '#FF5851'
    },
    sectionImage: {
        width: '40%',
        float: 'right',
        boxShadow: '-10px 15px 30px -10px rgba(0,0,0,0.31)'
    },
    sectionText: {
        width: '250px',
        textAlign: 'right',
        float: 'right',
        margin: '30px 70px',
        color: '#707070',
        fontWeight: '400',
        letterSpacing: '1.5px',

    },


    sectionContainerLeft: {
        position: 'static',
        overflow: 'auto',
        height: 'auto',
        marginBottom: '200px',
        paddingBottom: '30px'
    },
    sectionTitleLeft: {
        fontSize: '30px',
        color: '#4AAADC',
        marginLeft: '-20px',
        lineHeight: '50px'
    },
    sectionTitleSpanLeft: {
        color: '#FF5851'
    },
    sectionImageLeft: {
        width: '40%',
        float: 'left',
        boxShadow: '10px 15px 30px -10px rgba(0,0,0,0.31)'
    },
    sectionTextLeft: {
        width: '250px',
        textAlign: 'left',
        float: 'left',
        margin: '30px 70px',
        color: '#707070',
        fontWeight: '400',
        letterSpacing: '1.5px',

    }

}

