import React from 'react'
import './works-section.scss'
import { StaticQuery, graphql } from 'gatsby'

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
                {data.allPrismicWorks.edges.map((edge, index) =>
                <div key={index}>
                    {index % 2 === 0 ? 
                        <div className="work-section">
                            <a href={edge.node.data.link.url} target={edge.node.data.link.target}><img src={edge.node.data.image.url} alt={edge.node.data.title.text} /></a>
                        <div className="work-info">
                            <h1>{edge.node.data.title.text}</h1>
                            <ul>
                            {edge.node.tags.map((tag, index) =>
                                <li key={index}>{tag}</li>
                            )}
                            </ul>
                            <a className="link work-project" href={edge.node.data.link.url}>Project</a>
                            <a className="link work-github" href={edge.node.data.link.url}>Code</a>
                        </div>
                        
                    </div>
                    :
                    <div className="work-section-alt">
                        <div className="work-info">
                            <h1>{edge.node.data.title.text}</h1>
                            <ul>
                            {edge.node.tags.map((tag, index) =>
                                <li key={index}>{tag}</li>
                            )}
                            </ul>
                            <a className="link work-project" href={edge.node.data.link.url}>Project</a>
                            <a className="link work-github" href={edge.node.data.link.url}>Code</a>
                        </div>
                        <a href={edge.node.data.link.url} target={edge.node.data.link.target}><img src={edge.node.data.image.url} alt={edge.node.data.title.text} /></a>
                        
                    </div>

                    }
                </div>
                )}
            </section>
        )}
    />


)

export default worksSection