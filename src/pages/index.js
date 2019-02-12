import React, { Component } from 'react'
import TransitionLink, { TransitionPortal } from 'gatsby-plugin-transition-link'
import { TimelineMax, Power1 } from 'gsap'

import Header from '../components/header/header'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import AboutSection from '../components/home/about-section'
import SkillsSection from '../components/home/skills-section'
import WorksSection from '../components/home/works-section'
import TutorialsSection from '../components/home/tutorials-section'
import ContactSection from '../components/home/contact-section'
import 'bootstrap/dist/css/bootstrap.css'


class IndexPage extends Component {

  constructor(props) {
    super(props)

    this.verticalAnimation = this.verticalAnimation.bind(this)

    this.layoutContents = React.createRef()
    this.transitionCover = React.createRef()
    this.secondTransitionCover = React.createRef()
  }

  verticalAnimation = ({ length }, direction) => {
    const directionTo = direction === 'up' ? '-100%' : '100%'
    const directionFrom = direction === 'up' ? '100%' : '-100%'

    // convert ms to s for gsap
    const seconds = length

    return new TimelineMax()
      .set(this.transitionCover, { y: directionFrom })
      .to(this.transitionCover, seconds / 2, {
        y: '0%',
        ease: Power1.easeInOut,
      })
      .set(this.layoutContents, { opacity: 0 })
      .to(this.transitionCover, seconds / 2, {
        y: directionTo,
        ease: Power1.easeIn,
      })
  }


  test(entry, node) {
    return new TimelineMax().staggerFrom(
      node.querySelectorAll('h1, h2, p, a, pre'),
      1,
      { opacity: 0, y: '+=50' },
      0.1
    )
  }

  render() {
    return (
      <Layout>
        <div ref={n => (this.layoutContents = n)}>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <Header />
          <AboutSection />
          <SkillsSection />
          <WorksSection />
          <TutorialsSection />
          <ContactSection />
        </div>
        <TransitionPortal>
              <div
                ref={n => (this.transitionCover = n)}
                style={{
                  position: 'absolute',
                  background: '#4b2571',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  transform: 'translateY(100%)',
                }}
              />
              
              
        </TransitionPortal>
      </Layout>
    )
  }
}

// <TransitionLink
//                 to="/page-2/"
//                 exit={{
//                   length: 1,
//                   trigger: ({ exit }) => {
//                     this.verticalAnimation(exit, 'up');

//                   },
//                   state: { test: 'exit state' }
//                 }}
//                 entry={{
//                   delay: 0.5,
//                   trigger: ({ entry, node }) => this.test(entry, node),
//                 }}
//               >
//                 Go to page 2
//           </TransitionLink>


export default IndexPage
