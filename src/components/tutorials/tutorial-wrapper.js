import React from 'react'
import './tutorial-wrapper.scss'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';

let style = {
    container: {
        maxWidth: '1100px',
        margin: '150px auto',
        minHeight: '50vh',
        padding: '20px'
    },
    card: {
        '&:hover': {
            boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
            transition: 'all 0.5s cubic-bezier(.25,.8,.25,1)',
            backgroundColor:'white'
        }
    },
    media: {
        height: 140,
    },
    date: {
        marginTop: '20px',
        color: 'grey'
    }

}


const tutorialWrapper = ({ data, classes }) => {

    return (
        <div  className={classes.container}>
            <h1>Latest Tutorials</h1>
            <Grid container spacing={40}>
                {data.map(tutorial =>
                    <Grid key={tutorial.node.uid} item xs={12} sm={6} md={4} lg={3} >
                        <AniLink key={tutorial.node.uid} className="card-link" to={`/post/${tutorial.node.uid}`} cover direction="up" duration={1} bg="#FF5354">
                            <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.media}
                                        image={tutorial.node.data.header_image.url}
                                        title={tutorial.node.data.title.text} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h4">{tutorial.node.data.title.text}</Typography>
                                        <Typography component="p">{tutorial.node.data.description}</Typography>
                                        <Typography className={classes.date} component="p">{tutorial.node.data.date}</Typography>
                                    </CardContent>
                            </Card>
                        </AniLink>
                    </Grid>

                )}
            </Grid>
        </div>
    )
}

// tutorialWrapper.PropTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(style)(tutorialWrapper)

