import React, {Component} from 'react'
import Layout from '../components/layout/layout'
import {graphql} from 'gatsby'
import TutorialWrapper from '../components/tutorials/tutorial-wrapper'


class tutorials extends Component {
    render() {
        
        return (
            <Layout>
                <TutorialWrapper data={this.props.data.tutorials.edges} />
                    
            </Layout>
        )
    }
}

// export default tutorials

export const query = graphql`
    query allTutorials {
        tutorials: allPrismicTutorial {
            edges {
                node {
                    uid
                    tags
                    data {
                        title {
                            text
                            raw {
                                text
                            }
                        }
                        body {
                            ... on PrismicTutorialBodyText {
                              slice_type
                              primary {
                                text {
                                  raw {
                                    text
                                  }
                                }
                              }
                            }
                            
                            ... on PrismicTutorialBodyCodeBlock {
                              slice_type
                              primary {
                                code {
                                  html
                                  raw {
                                    type
                                    text
                                    label
                                  }
                                }
                              }
                            }
                            
                        }
                        header_image {
                            url
                        }
                        timestamp
                    }
                }
            }
        }
    }
`

export default tutorials