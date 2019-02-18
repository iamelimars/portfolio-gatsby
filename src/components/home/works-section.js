import React from 'react'
import './works-section.scss'
import { StaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade';


const worksSection = () => (
    <StaticQuery
        query={
            graphql`
                query {
                    allPrismicWorks {
                    edges {
                        node {
                        uid
                        tags
                        data {
                            title {
                                text
                            }
                            body {
                                html
                            }
                            image {
                                url
                            }
                            link {
                                link_type
                                url
                                target
                            }
                        }
                        }
                    }
                    }
                }
                
            `
        }
        render={data => (
            <section className="works-container">
                <div style={styles.header}>
                    <Fade ssrFadeout ssrFadein top>
                        <h1 style={styles.headerTitle}>Works<span style={styles.headerSpan}>.</span></h1>
                    </Fade>
                </div>
                {data.allPrismicWorks.edges.map((edge, index) =>
                    <div key={index}>
                        {index % 2 === 0 ?
                            <div>
                                <div className="work-section hidden-sm">
                                    <a href={edge.node.data.link.url} target={edge.node.data.link.target}><img src={edge.node.data.image.url} alt={edge.node.data.title.text} /></a>
                                    <div className="work-info">
                                        <Fade top cascade delay={600}>
                                            <h1>{edge.node.data.title.text}</h1>
                                        </Fade>
                                        <Fade top cascade delay={400}>
                                            <ul>
                                                {edge.node.tags.map((tag, index) =>
                                                    <li key={index}>{tag}</li>
                                                )}
                                            </ul>
                                        </Fade>
                                        <Fade cascade delay={600}>
                                            <a className="link work-project" href={edge.node.data.link.url}>Project</a>
                                            <a className="link work-github" href={edge.node.data.link.url}>Code</a>
                                        </Fade>
                                    </div>
                                </div>
                                <div className="work-section visible-sm">
                                    <a href={edge.node.data.link.url} target={edge.node.data.link.target}><img src={edge.node.data.image.url} alt={edge.node.data.title.text} /></a>
                                    <div className="work-info">
                                        <Fade top cascade delay={600}>
                                            <h1>{edge.node.data.title.text}</h1>
                                        </Fade>
                                        <Fade top cascade delay={400}>
                                            <ul>
                                                {edge.node.tags.map((tag, index) =>
                                                    <li key={index}>{tag}</li>
                                                )}
                                            </ul>
                                        </Fade>
                                        <Fade cascade delay={600}>
                                            <a className="link work-project" href={edge.node.data.link.url}>Project</a>
                                            <a className="link work-github" href={edge.node.data.link.url}>Code</a>
                                        </Fade>
                                    </div>
                                </div>
                            </div>

                            :
                            <div>
                                <div className="work-section-alt hidden-sm">
                                    <div className="work-info">
                                        <Fade top cascade delay={600}>
                                            <h1>{edge.node.data.title.text}</h1>
                                        </Fade>
                                        <Fade top cascade delay={400}>
                                            <ul>
                                                {edge.node.tags.map((tag, index) =>
                                                    <li key={index}>{tag}</li>
                                                )}
                                            </ul>
                                        </Fade>
                                        <Fade cascade delay={600}>
                                            <a className="link work-project" href={edge.node.data.link.url}>Project</a>
                                            <a className="link work-github" href={edge.node.data.link.url}>Code</a>
                                        </Fade>
                                    </div>
                                    <a href={edge.node.data.link.url} target={edge.node.data.link.target}><img src={edge.node.data.image.url} alt={edge.node.data.title.text} /></a>
                                </div>
                                <div className="work-section visible-sm">
                                    <a href={edge.node.data.link.url} target={edge.node.data.link.target}><img src={edge.node.data.image.url} alt={edge.node.data.title.text} /></a>
                                    <div className="work-info">
                                        <Fade top cascade delay={600}>
                                            <h1>{edge.node.data.title.text}</h1>
                                        </Fade>
                                        <Fade top cascade delay={400}>
                                            <ul>
                                                {edge.node.tags.map((tag, index) =>
                                                    <li key={index}>{tag}</li>
                                                )}
                                            </ul>
                                        </Fade>
                                        <Fade cascade delay={600}>
                                            <a className="link work-project" href={edge.node.data.link.url}>Project</a>
                                            <a className="link work-github" href={edge.node.data.link.url}>Code</a>
                                        </Fade>
                                    </div>
                                </div>

                            </div>


                        }
                    </div>
                )}
            </section>
        )}
    />


)

export default worksSection

let styles = {
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


}