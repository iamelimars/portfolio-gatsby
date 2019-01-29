import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const topNav = {
    top: '30px',
    right: '40px',
    position: 'absolute',
    zIndex: '2'
}

const navItem = {
    padding: '15px',
    textDecoration: 'none',
    fontSize: '0.8rem',
    color: '#272E3F'
}

const scrollAbout = () => {
    
}

const navbar = () => (
        <div style={topNav} className="top-nav">
            <AniLink style={navItem} className="nav-item" cover direction="up" duration={1} to="" bg="#FF5354">
                Home
            </AniLink>
            <AniLink style={navItem} className="nav-item" cover direction="up" duration={1} to="about" bg="#FF5354">
                About
            </AniLink>
            <AniLink style={navItem} className="nav-item" cover direction="right" duration={1} to="works" bg="#FF5354">
                Works
            </AniLink>
            <AniLink style={navItem} className="nav-item" cover direction="left" duration={1} to="tutorials" bg="#272E40">
                Tutorials
            </AniLink>
            <AniLink style={navItem} className="nav-item" cover direction="down" duration={1} to="contact" bg="#272E40">
                Contact
            </AniLink>
        </div>
)

export default navbar

{/* <a style={navItem} href="javascript:;" onClick={scrollToAbout} className="nav-item" >
About
</a> */}
