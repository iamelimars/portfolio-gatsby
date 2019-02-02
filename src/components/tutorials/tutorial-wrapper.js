import React from 'react'
import { Link } from 'gatsby'
import './tutorial-wrapper.scss'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const tutorialWrapper = ({ data }) => {
    // console.log(data);

    return (
        <div className="container" style={styles.container}>
            <h1>Latest Tutorials</h1>
            <div style={styles.wrapper}>
                {data.map(tutorial =>
                    <AniLink key={tutorial.node.uid} className="card-link" to={`/post/${tutorial.node.uid}`} cover direction="up" duration={1} bg="#FF5354">
                        <div className="card" style={styles.item} >
                            <img width="100%" src={tutorial.node.data.header_image.url} alt="" />
                            <div className="card-info">
                                <h4>{tutorial.node.data.title.text}</h4>
                                <h5>{tutorial.node.data.date}</h5>
                                {/* {tutorial.node.categories.map(category => 
                                <div>
                                    {category.category === null ?
                                        <h1>test</h1>
                                    :
                                        <h1>testttt</h1>
                                    }
                                    </div>
                                    )} */}

                                <p>{tutorial.node.data.description}</p>
                            </div>
                            {/* <div dangerouslySetInnerHTML={{ __html: tutorial.node.data.title.text }} /> */}
                        </div>
                    </AniLink>
                )}
            </div>
        </div>
    )
}


export default tutorialWrapper

let styles = {
    container: {
        maxWidth: '1100px',
        margin: '150px auto',
        minHeight: '50vh',
        padding: '20px'
    },
    wrapper: {
        marginTop: '30px',
        display: 'grid',
        // gridTemplateColumns: '30% 30% 30%',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        justifyContent: 'center',
        gridGap: '30px'

    },
    item: {
        // justifySelf: 'center'
    },
    img: {
        // objectFit: 'cover',

    }



}