import React from 'react'

const tutorialWrapper = ({ data }) => {
    // console.log(data);

    return (
        <div style={styles.container}>
            <h1>Latest Tutorials</h1>
            <div style={styles.wrapper}>
                {data.map(tutorial =>
                    <div key={tutorial.node.uid}>
                        <img width="250px" src={tutorial.node.data.header_image.url} alt=""/>
                        <div dangerouslySetInnerHTML={{ __html: tutorial.node.data.title.text }} />
                    </div>
                )}
            </div>
        </div>
    )
}


export default tutorialWrapper

let styles = {
    container: {
        maxWidth: '900px',
        margin: '150px auto',
        minHeight: '50vh'
    },
    wrapper: {
        marginTop: '30px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'

    }



}