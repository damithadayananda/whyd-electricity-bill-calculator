import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";

import FullScreenDialog from "./fullScreenDialog";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

const customStyle = {
  cardWidth: {
    paddingLeft: 100,
    paddingRight: 100,
    maxWidth: 500,
    width: 500
  }
};

class MyCard extends React.Component {
  state = {
    expanded: false,
    open: false
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = value => {
    this.setState({ open: false });
  };
  componentDidMount(){
    console.log("component mounted:",this.props.mode)
  }
  render() {
    const { classes } = this.props;
    const imgUrl = this.props.image;
    const image = require(`${imgUrl}`);
    return (
      <div>
        <Card style={customStyle.cardWidth} className={classes.card}>
          <CardHeader
            title={this.props.title}
            subheader={this.props.subTitle}
          />
          <CardMedia
            className={classes.media}
            // image="/static/images/cards/paella.jpg"
            //image={require("../image/" + imgUrl)}
            image={image}
            title="Paella dish"
          />
          <CardContent>
            <Typography component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
              {this.props.mode==="usage"?(
                  <FullScreenDialog
                      selectedValue={this.state.selectedValue}
                      open={this.state.open}
                      onClose={this.handleClose}
                      inputMode="usage"
                      category={this.props.category}
                  />
              ):this.props.mode==="time" && this.props.title !=="Domestic time base"?(
                  <FullScreenDialog
                      selectedValue={this.state.selectedValue}
                      open={this.state.open}
                      onClose={this.handleClose}
                      inputMode="time"
                      category={this.props.category}
                  />
              ):(
                  <FullScreenDialog
                      selectedValue={this.state.selectedValue}
                      open={this.state.open}
                      onClose={this.handleClose}
                      inputMode="timeDom"
                      category={this.props.category}
                  />
              )}

          </CardActions>
        </Card>
      </div>
    );
  }
}

MyCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyCard);
