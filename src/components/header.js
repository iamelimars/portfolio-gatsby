import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Header.scss'
// import posed from 'react-pose';c
import anime from 'animejs'

// import HeaderSvg from './HeaderSvg';

const heroStyle = {
  width: '100%',
  height: '100%'
}

class Header extends Component {

  constructor(props) {
    super(props);
    this.loadingRef = React.createRef();
}

componentDidMount() {

    var tl = anime.timeline({
        easing: 'easeInOutQuart',
        // duration: 1750,
        // delay: anime.stagger(100),
        // delay: 1000,
        autoplay: false

    });

    tl
        .add({
            targets: '.logo',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutQuart',
            duration: 2000,
            // delay: 1000,
        }, 0)
        .add({
            targets: '.logo-brand',
            translateY: '-46vh',
            translateX: '-46vw',
            easing: 'easeInOutQuart',
            duration: 1000,
            // delay: 1000,
        }, 1000)
        .add({
            targets: '.logo',
            easing: 'easeInOutQuart',
            duration: 1000,
            fill: '#fff'
        })
        .add({
            targets: '.logo-circle',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutQuart',
            duration: 1000,
        })
        .add({
            targets: '.nav-item',
            opacity: [0, 1],
            translateY: '-20px',
            easing: 'easeInOutQuart',
            duration: 1000,
            delay: anime.stagger(100)
        }, 1500)
        .add({
            targets: '.scroll-btn',
            opacity: [0, 1],
            translateY: '-30px',
            translateX: '-20px',
            easing: 'easeInOutQuart',
            duration: 1000,
            rotate: -90,
        }, 1500)
        .add({
            targets: '.code-path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutQuart',
            duration: 2000,
            // delay: 1000,
        }, 1700)
        .add({
            targets: '.headerSvg',
            opacity: [0, 1],
            translateY: '-20px',
            easing: 'easeInOutQuart',
            duration: 1000,
            delay: anime.stagger(100)
        }, 1500)

    let intro = anime({
        targets: ' .polymorph',
        width: '100%',
        easing: 'easeInOutQuart',
        duration: 1000,
        complete: function (anim) {

            anime({
                targets: ' .polymorph',
                width: '50%',
                easing: 'easeInOutQuart',
                duration: 800,
                delay: 800
            });
            tl.play();
        }
    });



}
  render() {
    return (
      <section className="header-container">
                {/* <svg viewBox="0 0 215 110" className="svgHero"> */}
                <svg viewBox="0 0 100% 100%" className="svgHero" style={heroStyle}>
                    <rect className="polymorph" fill="#FF5354" x="0" y="0" ></rect>
                    {/* <polygon class="polymorph" fill="#FF5354" points="215,110 0,110 0,0 47.7,0 215,0" ></polygon> */}
                </svg>
                <svg className="logo-brand" width="58px" height="35px" viewBox="0 0 58 35" >
                    <defs></defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path className="logo" d="M13.9199219,33.6171875 C11.9863185,34.2031279 10.3310616,34.4960938 8.95410156,34.4960938 C6.61033984,34.4960938 4.69873787,33.7172929 3.21923828,32.159668 C1.7397387,30.602043 1,28.5830202 1,26.1025391 C1,23.6904176 1.65184895,21.7128983 2.95556641,20.1699219 C4.25928386,18.6269454 5.92674766,17.8554688 7.95800781,17.8554688 C9.88184556,17.8554688 11.3686471,18.5390557 12.418457,19.90625 C13.468267,21.2734443 13.9931641,23.2167843 13.9931641,25.7363281 L13.9785156,26.6298828 L3.94433594,26.6298828 C4.36425991,30.4091986 6.21482734,32.2988281 9.49609375,32.2988281 C10.6972716,32.2988281 12.1718663,31.9765657 13.9199219,31.3320312 L13.9199219,33.6171875 Z M4.07617188,24.4619141 L11.0927734,24.4619141 C11.0927734,21.5029149 9.98926885,20.0234375 7.78222656,20.0234375 C5.5654186,20.0234375 4.33007939,21.5029149 4.07617188,24.4619141 Z M23.9736328,34.1298828 L23.9736328,11 L26.859375,11 L26.859375,34.1298828 L23.9736328,34.1298828 Z M37.6455078,34.1298828 L37.6455078,18.2216797 L40.53125,18.2216797 L40.53125,34.1298828 L37.6455078,34.1298828 Z M37.6455078,15.3359375 L37.6455078,12.4501953 L40.53125,12.4501953 L40.53125,15.3359375 L37.6455078,15.3359375 Z" id="eli" stroke="#FFFFFF" strokeWidth="0.5"></path>
                        <circle className="logo-circle" id="Oval" stroke="#272E3F" strokeWidth="2" cx="52" cy="6" r="5"></circle>
                    </g>
                </svg>

                <div className="top-nav">
                    <a className="nav-item" href="/">About</a>
                    <a className="nav-item" href="/">Courses</a>
                    <a className="nav-item" href="/">Works</a>
                    <a className="nav-item" href="/">Contact</a>
                </div>


                <svg className="code-label" width="114px" height="111px" viewBox="0 0 114 111" >
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path className="code-path" d="M12.47,41.93 C9.0099827,40.0699907 6.2900099,37.4900165 4.31,34.19 C2.3299901,30.8899835 1.34,27.1600208 1.34,23 C1.34,18.8399792 2.3299901,15.1100165 4.31,11.81 C6.2900099,8.5099835 9.0099827,5.9300093 12.47,4.07 C15.9300173,2.2099907 19.8199784,1.28 24.14,1.28 C27.7800182,1.28 31.0699853,1.9199936 34.01,3.2 C36.9500147,4.4800064 39.41999,6.319988 41.42,8.72 L35.18,14.48 C32.3399858,11.1999836 28.820021,9.56 24.62,9.56 C22.019987,9.56 19.7000102,10.1299943 17.66,11.27 C15.6199898,12.4100057 14.0300057,13.9999898 12.89,16.04 C11.7499943,18.0800102 11.18,20.399987 11.18,23 C11.18,25.600013 11.7499943,27.9199898 12.89,29.96 C14.0300057,32.0000102 15.6199898,33.5899943 17.66,34.73 C19.7000102,35.8700057 22.019987,36.44 24.62,36.44 C28.820021,36.44 32.3399858,34.7800166 35.18,31.46 L41.42,37.22 C39.41999,39.6600122 36.9400148,41.5199936 33.98,42.8 C31.0199852,44.0800064 27.7200182,44.72 24.08,44.72 C19.7999786,44.72 15.9300173,43.7900093 12.47,41.93 Z M60.61,41.9 C57.1099825,40.0199906 54.3700099,37.4300165 52.39,34.13 C50.4099901,30.8299835 49.42,27.1200206 49.42,23 C49.42,18.8799794 50.4099901,15.1700165 52.39,11.87 C54.3700099,8.5699835 57.1099825,5.9800094 60.61,4.1 C64.1100175,2.2199906 68.0399782,1.28 72.4,1.28 C76.7600218,1.28 80.6799826,2.2199906 84.16,4.1 C87.6400174,5.9800094 90.37999,8.5699835 92.38,11.87 C94.38001,15.1700165 95.38,18.8799794 95.38,23 C95.38,27.1200206 94.38001,30.8299835 92.38,34.13 C90.37999,37.4300165 87.6400174,40.0199906 84.16,41.9 C80.6799826,43.7800094 76.7600218,44.72 72.4,44.72 C68.0399782,44.72 64.1100175,43.7800094 60.61,41.9 Z M79.12,34.73 C81.12001,33.5899943 82.6899943,32.0000102 83.83,29.96 C84.9700057,27.9199898 85.54,25.600013 85.54,23 C85.54,20.399987 84.9700057,18.0800102 83.83,16.04 C82.6899943,13.9999898 81.12001,12.4100057 79.12,11.27 C77.11999,10.1299943 74.8800124,9.56 72.4,9.56 C69.9199876,9.56 67.68001,10.1299943 65.68,11.27 C63.67999,12.4100057 62.1100057,13.9999898 60.97,16.04 C59.8299943,18.0800102 59.26,20.399987 59.26,23 C59.26,25.600013 59.8299943,27.9199898 60.97,29.96 C62.1100057,32.0000102 63.67999,33.5899943 65.68,34.73 C67.68001,35.8700057 69.9199876,36.44 72.4,36.44 C74.8800124,36.44 77.11999,35.8700057 79.12,34.73 Z M3.98,68 L23.06,68 C27.6200228,68 31.6499825,68.8699913 35.15,70.61 C38.6500175,72.3500087 41.3699903,74.7999842 43.31,77.96 C45.2500097,81.1200158 46.22,84.799979 46.22,89 C46.22,93.200021 45.2500097,96.8799842 43.31,100.04 C41.3699903,103.200016 38.6500175,105.649991 35.15,107.39 C31.6499825,109.130009 27.6200228,110 23.06,110 L3.98,110 L3.98,68 Z M22.58,102.02 C26.780021,102.02 30.1299875,100.850012 32.63,98.51 C35.1300125,96.1699883 36.38,93.00002 36.38,89 C36.38,84.99998 35.1300125,81.8300117 32.63,79.49 C30.1299875,77.1499883 26.780021,75.98 22.58,75.98 L13.7,75.98 L13.7,102.02 L22.58,102.02 Z M91.06,102.2 L91.06,110 L58.54,110 L58.54,68 L90.28,68 L90.28,75.8 L68.2,75.8 L68.2,84.92 L87.7,84.92 L87.7,92.48 L68.2,92.48 L68.2,102.2 L91.06,102.2 Z M103.14,108.8 C102.019994,107.679994 101.46,106.280008 101.46,104.6 C101.46,102.879991 102.019994,101.490005 103.14,100.43 C104.260006,99.3699947 105.639992,98.84 107.28,98.84 C108.920008,98.84 110.299994,99.3699947 111.42,100.43 C112.540006,101.490005 113.1,102.879991 113.1,104.6 C113.1,106.280008 112.540006,107.679994 111.42,108.8 C110.299994,109.920006 108.920008,110.48 107.28,110.48 C105.639992,110.48 104.260006,109.920006 103.14,108.8 Z" id="CO-DE." stroke="#FFFFFF"></path>
                    </g>
                </svg>

                {/* <HeaderSvg /> */}


                <svg className="design-label" width="140px" height="112px" viewBox="0 0 140 112" >
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <path className="code-path" d="M0.98,2 L20.06,2 C24.6200228,2 28.6499825,2.8699913 32.15,4.61 C35.6500175,6.3500087 38.3699903,8.7999842 40.31,11.96 C42.2500097,15.1200158 43.22,18.799979 43.22,23 C43.22,27.200021 42.2500097,30.8799842 40.31,34.04 C38.3699903,37.2000158 35.6500175,39.6499913 32.15,41.39 C28.6499825,43.1300087 24.6200228,44 20.06,44 L0.98,44 L0.98,2 Z M19.58,36.02 C23.780021,36.02 27.1299875,34.8500117 29.63,32.51 C32.1300125,30.1699883 33.38,27.00002 33.38,23 C33.38,18.99998 32.1300125,15.8300117 29.63,13.49 C27.1299875,11.1499883 23.780021,9.98 19.58,9.98 L10.7,9.98 L10.7,36.02 L19.58,36.02 Z M88.06,36.2 L88.06,44 L55.54,44 L55.54,2 L87.28,2 L87.28,9.8 L65.2,9.8 L65.2,18.92 L84.7,18.92 L84.7,26.48 L65.2,26.48 L65.2,36.2 L88.06,36.2 Z M104.97,43.37 C101.869984,42.4699955 99.3800094,41.3000072 97.5,39.86 L100.8,32.54 C102.600009,33.8600066 104.739988,34.919996 107.22,35.72 C109.700012,36.520004 112.179988,36.92 114.66,36.92 C117.420014,36.92 119.459993,36.5100041 120.78,35.69 C122.100007,34.8699959 122.76,33.7800068 122.76,32.42 C122.76,31.419995 122.370004,30.5900033 121.59,29.93 C120.809996,29.2699967 119.810006,28.740002 118.59,28.34 C117.369994,27.939998 115.72001,27.5000024 113.64,27.02 C110.439984,26.2599962 107.82001,25.5000038 105.78,24.74 C103.73999,23.9799962 101.990007,22.7600084 100.53,21.08 C99.0699927,19.3999916 98.34,17.160014 98.34,14.36 C98.34,11.9199878 98.9999934,9.7100099 100.32,7.73 C101.640007,5.7499901 103.629987,4.1800058 106.29,3.02 C108.950013,1.8599942 112.199981,1.28 116.04,1.28 C118.720013,1.28 121.339987,1.5999968 123.9,2.24 C126.460013,2.8800032 128.69999,3.799994 130.62,5 L127.62,12.38 C123.739981,10.179989 119.860019,9.08 115.98,9.08 C113.259986,9.08 111.250006,9.5199956 109.95,10.4 C108.649993,11.2800044 108,12.4399928 108,13.88 C108,15.3200072 108.749993,16.3899965 110.25,17.09 C111.750008,17.7900035 114.039985,18.4799966 117.12,19.16 C120.320016,19.9200038 122.93999,20.6799962 124.98,21.44 C127.02001,22.2000038 128.769993,23.3999918 130.23,25.04 C131.690007,26.6800082 132.42,28.899986 132.42,31.7 C132.42,34.100012 131.750007,36.2899901 130.41,38.27 C129.069993,40.2500099 127.060013,41.8199942 124.38,42.98 C121.699987,44.1400058 118.440019,44.72 114.6,44.72 C111.279983,44.72 108.070015,44.2700045 104.97,43.37 Z M0.98,68 L10.7,68 L10.7,110 L0.98,110 L0.98,68 Z M54.04,88.34 L62.92,88.34 L62.92,105.38 C60.6399886,107.100009 58.000015,108.419995 55,109.34 C51.999985,110.260005 48.9800152,110.72 45.94,110.72 C41.5799782,110.72 37.6600174,109.790009 34.18,107.93 C30.6999826,106.069991 27.9700099,103.490016 25.99,100.19 C24.0099901,96.8899835 23.02,93.1600208 23.02,89 C23.02,84.8399792 24.0099901,81.1100165 25.99,77.81 C27.9700099,74.5099835 30.7199824,71.9300093 34.24,70.07 C37.7600176,68.2099907 41.719978,67.28 46.12,67.28 C49.8000184,67.28 53.139985,67.8999938 56.14,69.14 C59.140015,70.3800062 61.6599898,72.1799882 63.7,74.54 L57.46,80.3 C54.459985,77.1399842 50.8400212,75.56 46.6,75.56 C43.9199866,75.56 41.5400104,76.1199944 39.46,77.24 C37.3799896,78.3600056 35.7600058,79.9399898 34.6,81.98 C33.4399942,84.0200102 32.86,86.3599868 32.86,89 C32.86,91.600013 33.4399942,93.9199898 34.6,95.96 C35.7600058,98.0000102 37.3699897,99.5899943 39.43,100.73 C41.4900103,101.870006 43.8399868,102.44 46.48,102.44 C49.280014,102.44 51.7999888,101.840006 54.04,100.64 L54.04,88.34 Z M115.44,68 L115.44,110 L107.46,110 L86.52,84.5 L86.52,110 L76.92,110 L76.92,68 L84.96,68 L105.84,93.5 L105.84,68 L115.44,68 Z M129.14,108.8 C128.019994,107.679994 127.46,106.280008 127.46,104.6 C127.46,102.879991 128.019994,101.490005 129.14,100.43 C130.260006,99.3699947 131.639992,98.84 133.28,98.84 C134.920008,98.84 136.299994,99.3699947 137.42,100.43 C138.540006,101.490005 139.1,102.879991 139.1,104.6 C139.1,106.280008 138.540006,107.679994 137.42,108.8 C136.299994,109.920006 134.920008,110.48 133.28,110.48 C131.639992,110.48 130.260006,109.920006 129.14,108.8 Z" id="DES-IGN." stroke="#FF5354"></path>
                    </g>
                </svg>

                <a href="/" className="scroll-btn">SCROLL</a>


            </section>
    )
  }
} 

  // <div
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </div>


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
