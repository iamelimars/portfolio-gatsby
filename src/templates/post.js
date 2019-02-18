import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'

import  SliceZone  from '../components/SliceZone'
import Img from 'gatsby-image'
import { DiscussionEmbed } from "disqus-react";


const Post = ({ data: { prismicPost, posts }, location }) => {
    const { data, id } = prismicPost
    const disqusShortname = "elimarshall";
    const disqusConfig = {
      identifier: id,
      title: data.title.text,
    };
    
    return (
      <Layout >
        <div style={styles.container}>
            <Img fluid={data.header_image.localFile.childImageSharp.fluid} />
            <h1>{data.title.text}</h1>
            <h5>{data.date}</h5>
            <SliceZone allSlices={data.body} />
            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
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
      id
      first_publication_date
      last_publication_date
      data {
        title {
          text
        }
        description
        date(formatString: "DD.MM.YYYY")
        ... on data_8 {
          header_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
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