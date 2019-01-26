import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import NavBar from '../common/navbar/navbar'
import Footer from '../footer/footer'

import Header from '../header/header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div className="wrapper"
          // style={{
          //   margin: `0 auto`,
          //   maxWidth: 960,
          //   padding: `0px 1.0875rem 1.45rem`,
          //   paddingTop: 0,
          // }}
        >
          <NavBar />
          {children}
          <Footer />
          {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer> */}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
