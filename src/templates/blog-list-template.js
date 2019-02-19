import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import TutorialWrapper from '../components/tutorials/tutorial-wrapper'

export default class BlogList extends Component {

    render() {
        const posts = this.props.data.allPrismicPost.edges        
        const { currentPage, numPages } = this.props.pageContext
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${(currentPage - 1).toString()}`
        const nextPage = `/blog/${(currentPage + 1).toString()}`

        return (
            <Layout>
                <TutorialWrapper data={posts} />
                <div style={styles.pagination}>
                    {!isFirst ? 
                        (<Link style={styles.btn} to={prevPage} rel="prev">Prev</Link>)
                        :
                        (<Link style={styles.btnDisabled} to={prevPage} rel="prev">Prev</Link>)
                    }

                    {!isLast ?
                        (<Link style={styles.btn} to={nextPage} rel="next">Next</Link>)
                        :
                        (<Link style={styles.btnDisabled} to={nextPage} rel="next">Next</Link>)
                    }
                </div>
            </Layout>
        )
    }
}

export const blogListQuery = graphql`
    query blogListQuery($skip: Int!, $limit: Int!) {
        allPrismicPost(
            limit: $limit
            skip: $skip
            sort: {fields: [data___date], order: DESC}
        ) {
            edges {
                node {
                    uid
                    data {
                        title {
                            text
                          	raw {
                              text
                            }
                            html
                        }
                        categories {
                            category {
                              document {
                                data {
                                  name
                                }
                              }
                            }
                          }
                        description
                        date(formatString: "MM.DD.YYYY")
                        header_image {
                            url
                        }
                    }
                }
            }
        }
    }
`

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
        fontWeight: '500',
        textDecoration: 'none',
    },
    btnDisabled: {
        pointerEvents: 'none',
        cursor: 'default',
        textDecoration: 'none',
        backgroundColor: 'gray',
        border: 'none',
        borderRadius: '20px',
        padding: '10px 35px',
        color: 'white',
        fontWeight: '500',
        opacity: '0.5'
    }
}