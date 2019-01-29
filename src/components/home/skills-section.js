import React from 'react'
import Radium, { StyleRoot } from 'radium'
import './skills-section.scss'
import Fade from 'react-reveal/Fade';



const skillsSection = () => (
    <StyleRoot>
        <section className="skills-container" >
            <div className="skill-section" style={styles.skillSection}>
                <h1>Languages</h1>
                <Fade top cascade delay={400}>
                    <ul>
                        <li>Javascript (ES6)</li>
                        <li>PHP</li>
                        <li>Swift</li>
                        <li>Objective C</li>
                        <li>HTML5</li>
                        <li>CSS3 (SCSS)</li>
                        <li>SQL</li>
                        <li>GraphQL</li>
                    </ul>
                </Fade>
            </div>
            <div className="skill-section" style={styles.skillSection}>
                <h1>Frameworks & LIBS</h1>
                <Fade top cascade delay={600}>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Laravel</li>
                        <li>Next.js, Gatsby.js</li>
                        <li>jQuery</li>
                        <li>Wordpress</li>
                        <li>Prismic</li>
                        <li>Node.js (In Process)</li>
                        <li>Axios</li>
                    </ul>
                </Fade>

            </div>
            <div className="skill-section" style={styles.skillSection}>
                <h1>Additional</h1>
                <Fade top cascade delay={800}>
                    <ul>
                        <li>Git (Github)</li>
                        <li>Photoshop, Sketch</li>
                        <li>MySQL</li>
                        <li>REST Api's</li>
                        <li>Chart.js</li>
                        <li>Performance Optimisation</li>
                        <li>Webpack, NPM, Yarn, Babel</li>
                        <li>Command Line</li>
                        <li>Socket.io</li>
                        <li>Anime.js, Bootstrap, etc..</li>
                    </ul>
                </Fade>
            </div>
        </section>
    </StyleRoot>

)

export default Radium(skillsSection)

let styles = {
    container: {
        backgroundColor: '#272E40',
        maxWidth: '800px',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        gridGap: '10px',
        padding: '20px',
        justifyContent: 'space-evenly',


    },
    skillSection: {

    }
}