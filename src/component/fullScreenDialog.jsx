import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import InputForUsageBase from "./inputForUsageBase";
import InputForTimeBase from "./inputForTimeBase"
import InputForUsageBaseNonHome from "./inputForUsageBaseNonHome"
import InputForTimeBaseDom from "./inputForTimeBaseDom"

const styles = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>Calculate Bill</Button>
        <Dialog fullScreen open={this.state.open} onClose={this.handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Close
              </Typography>
            </Toolbar>
          </AppBar>
            {(this.props.inputMode==="usage")&&((this.props.category==="Religious")||(this.props.category==="domestic"))?(
                <InputForUsageBase category={this.props.category} />
              ):this.props.inputMode==="usage"?(
                <InputForUsageBaseNonHome category={this.props.category}/>
              ):this.props.inputMode==="time"?(
                <InputForTimeBase category={this.props.category}/>
              ):this.props.inputMode==="timeDom"?(
                <InputForTimeBaseDom category={this.props.category}/>
              ):(
                  <h1>time base dom input</h1>
            )}

        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenDialog);
