import React, { Component } from 'react'
import Layout from '../components/layout/layout'
import { graphql } from 'gatsby'
import TutorialWrapper from '../components/tutorials/tutorial-wrapper'


class tutorials extends Component {

    componentDidMount() {
        console.log(this.props.data);
        
    }

    componentDidUpdate() {
        console.log(this.props.data);
    }

    nextClick = (e) => {
        console.log('next clicked');
        
    }

    prevClick = (e) => {
        console.log('prev clicked');
    }


    render() {
        // console.log(this.props.data.posts);
        return (
            <Layout>
                <TutorialWrapper data={this.props.data.posts.edges} />
                <div style={styles.pagination}>
                    <button style={styles.btn} onClick={this.prevClick}>Prev</button>
                    <button style={styles.btn} onClick={this.nextClick}>Next</button>
                </div>
            </Layout>
        )
    }
}

// export default tutorials

export const query = graphql`
    query allPosts {
        posts: allPrismicPost {
            totalCount
            pageInfo {
              hasNextPage
            }
            edges {
              node {
                uid
                data {
                  title {
                    raw {
                      type
                      text
                    }
                    text
                  }
                  date
                  description
                  header_image {
                    url
                  }
                  body {
                    ... on PrismicPostBodyText {
                      primary {
                        text {
                          raw {
                            type
                            text
                          }
                        }
                      }
                    }
                    ... on PrismicPostBodyImage {
                      primary {
                        image {
                          dimensions {
                            height
                            width
                          }
                          url
                          copyright
                          copyright
                        }
                      }
                    }
                    ... on PrismicPostBodyCodeBlock {
                      primary {
                        code_block {
                          raw {
                            type
                            text
                            label
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
    }
`

export default tutorials

let styles = {
    pagination: {
        maxWidth: '900px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-around'
    },
    btn: {
        backgroundColor: '#FF5851',
        border: 'none',
        borderRadius: '20px',
        padding: '10px 35px',
        boxShadow: '2px 1px 14px 1px rgba(235,117,112,0.58)',
        color: 'white',
        fontWeight: '700'
    }
}