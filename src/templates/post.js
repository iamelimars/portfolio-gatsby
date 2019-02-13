import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import  prism  from '../styles/prism'
import styled from '@emotion/styled'
import  SliceZone  from '../components/SliceZone'
import Img from 'gatsby-image'
import { DiscussionEmbed } from "disqus-react";





const Content = styled.div`
  ${prism};
  padding: 6rem 0;
  p,
  li {
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    font-size: 21px;
    line-height: 1.58;
    code {
      padding: 0.2rem 0.5rem;
      margin: 0.5rem 0;
    }
  }
  blockquote {
    margin-left: 0;
    padding-left: 1.45rem;
    border-left: 2px solid grey;
    p {
      font-size: 19px;
      font-style: italic;
    }
  }
`

const Post = ({ data: { prismicPost, posts }, location }) => {
    const { data, id } = prismicPost
    console.log(data);
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