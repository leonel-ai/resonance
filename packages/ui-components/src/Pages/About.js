import React from "react"
import { withStyles } from "material-ui/styles"
import Grid from "@material-ui/core/Grid"
import ReactPlayer from 'react-player'
import Typography from "material-ui/Typography"
import BlueDash from "../Assets/blue-divider.svg"

const styles = theme => ({
  root: {
    flexGrow: "1",
    overflow: "hidden"
  },
  title: {
    margin: "0",
    backgroundColor: "#fc391d",
    color: "white",
    padding: "48px 56px 8px 56px",
    fontSize: "3.25em",
  },
  divider: {
    paddingLeft: "3.25em",
    overflow: "hidden",
    margin: "0",
    backgroundColor: "#fc391d"
  },
  subtitle: {
    margin: "0",
    padding: "14px 56px 12px 56px",
    backgroundColor: "#fc391d",
    color: "white",
    fontFamily: "Atlas Grotesk Web",
    fontSize: "1.75em"
  },
  body: {
    backgroundColor: "#fc391d",
    color: "white",
    margin: "0",
    padding: "48px 56px 48px 56px"
  },
  list: {
    listStyle: "none",
  },
  videoGrid: {
    backgroundColor: "#fc391d",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    paddingBottom: "3em",
  },
  videoContainer: {
    margin: "0 auto"
  },
  videoButton: {
    backgroundColor: "navy",
    border: "20px solid navy",
    color: "white",
    fontSize: "1.2em",
    alignContent: "center",
    alignItems: "center"
  },
  aboutVideo: {
    alignContent: "center",
    margin: "0 auto"
  },
  bodyGrid: {
    padding: "96px 56px 48px 56px",
    textAlign: "center"
  },
  NetworkMap: {
    backgroundColor: "#fc391d",
    border: "40px solid #fc391d",
  }
})

const AboutPage = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Typography variant="title" className={classes.title}>
        PURPOSE
      </Typography>
      <div className={classes.divider}>
        <img src={BlueDash}/>
      </div>
      <Typography variant="title" className={classes.subtitle}>
        ABOUT RESONANCE NETWORK
      </Typography>
      <Typography variant="body2" className={classes.body}>
        The purpose of Resonance Network is to reimagine and practice what is
        possible and necessary to transform society from a culture of violence
        to one of interdependent worthiness and thriving.<br/><br/>
        Resonance Network participants are movement-builders, network-weavers,
        students, organizers, teachers, storytellers, engineers, healers,
        advocates, artists, and all those who are committed to hope for and work
        toward the thriving of future generations. Together, we interrupt the roots
        and conditions of violence that deeply impact girls, women, and gender-oppressed
        people. Center the power of people and communities who are disproportionately
        impacted by the systems of oppression, invisibility, and erasure.<br/><br/>
        <ul className={classes.list}>
          <li>
            Create new conditions with powerful and liberated communities that
            are thriving, just, and accountable.<br/><br/>
          </li>
          <li>
            Support people to experiment collaboratively, take individual and
            collective action, and share learning.<br/><br/>
          </li>
        </ul>
        Resonance Network has defined our two-year strategic priorities based on
        learnings from seed activities and analysis of the current landscape.
      </Typography>



        <Grid container spacing={24} className={classes.videoGrid}>
          <Grid item xs={12} className={classes.videoContainer}>
            <ReactPlayer fluid={true} url="https://youtu.be/mO3Q4bRQZ3k" className={classes.aboutVideo}/>                
          </Grid>
          <Grid item xs={12}>
            <button className={classes.videoButton}>What We're Up To</button>
          </Grid>
        </Grid>



       <Grid container spacing={24} className={classes.bodyGrid}>
          <Grid item xs={6}>
            <Typography className={classes.body2}>
            You are invited to join our network map.<br/>Click here to start.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.body2}>
              <span className={classes.NetworkMap}>Network Map</span>
            </Typography>
          </Grid>
        </Grid>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(AboutPage)
