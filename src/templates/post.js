import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'

const Post = ({ data: { prismicPost, posts }, location }) => {
    const { data } = prismicPost
    console.log(data);
    
    return (
      <Layout >
        <div style={styles.container}>
            <h1>{data.title.text}</h1>
            <h3>{data.description}</h3>
            <h5>{data.date}</h5>
            {data.body.map(section => {
                switch (section.slice_type) {
                    case "code_block":
                        return (
                            <div dangerouslySetInnerHTML={{__html: section.primary.code_block.html}} />
                        )
                    case "text":
                        return (
                            <div>
                                <div dangerouslySetInnerHTML={{__html: section.primary.text.html}} />
                                
                            </div>
                        )
                    case "image":
                        return (
                            <div>
                                <img width='100%' src={section.primary.image.localFile.childImageSharp.fluid.src} alt=""/>
                            </div>
                        )
                
                    default:
                        return null
                }
                
            }
                
            )}
        </div>
      </Layout>
    )
  }
  
  export default Post

  let styles = {
      container: {
          maxWidth: '900px',
          margin: '100px auto'
      }
  }


  export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        title {
          text
        }
        description
        date(formatString: "DD.MM.YYYY")
        header_image {
            url
          }
        body {
          ... on PrismicPostBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyCodeBlock {
            slice_type
            id
            primary {
              code_block {
                html
              }
            }
          }
          ... on PrismicPostBodyImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    posts: allPrismicPost(limit: 2, sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            date(formatString: "DD.MM.YYYY")
          }
        }
      }
    }
  }
`