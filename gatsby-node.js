/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require("path")
const _ = require('lodash')

const wrapper = promise => promise.then(result => ({ result, error: null })).catch(error => ({ error, result:null }))

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const postTemplate = path.resolve('src/templates/post.js')
    const postsTemplate = path.resolve('src/templates/blog-list-template.js')

    const { error, result } = await wrapper(
        graphql(`
            {
                allPrismicPost(
                    limit: 1000
                ) {
                    edges {
                        node {
                            id
                            uid
                        }
                    }
                }
            }
        `)
    )

    if (!error) {
        const postsList = result.data.allPrismicPost.edges

        const postsPerPage = 9
        const numPages = Math.ceil(postsList.length / postsPerPage)

        Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog` : `/blog/${i + 1}`,
                component: postsTemplate,
                context: {
                    edges: postsList,
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1
                }
            })
        })

        // createPage({
        //     path: `/blog`,
        //     component: postsTemplate,
        //     context: {
        //         edges: postsList
        //     }
        // })

        postsList.forEach(edge => {
            createPage({
                path:  `/post/${edge.node.uid}`,
                component: postTemplate,
                context: {
                    uid: edge.node.uid,
                },
            })
        })
    }

    console.log(error);
    
}
