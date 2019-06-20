/* import React, { Component } from "react";
class Calculator extends Component {
  state = {};
  render() {
    return <h1>Inside calculator</h1>;
  }
}

export default Calculator;
 */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";


import Alarm from "@material-ui/icons/AccessAlarm";
import Usage from "@material-ui/icons/ShoppingCart";
import Description from "@material-ui/icons/Description";


import BaseContentForCalculator from "./baseContentForCalculator";
import BaseContentForDescription from "./baseContentForDescription";
import BaseContentForUsage from "./baseContentForUsage";



const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

const customStyle = {
  toolbar: {
    backgroundColor: "hsl(222, 76%, 7%, 0.82)"
  },
  cardPadding: {
    paddingBottom: 50,
    paddingLeft: 25,
    paddingRight: 25
  }
};

class Calculator extends React.Component {
  constructor() {
    super();
    this.drawerTimeIconClick = this.drawerTimeIconClick.bind(this);
    this.drawerDescriptionIconClick = this.drawerDescriptionIconClick.bind(
      this
    );
    this.drawerUsageIconClick = this.drawerUsageIconClick.bind(this);
  }
  state={
      open: false,
      time: true,
      usage: false,
      descrpition: false,
      drawerHeader: "Time Base Categories"
  }
  componentDidMount(){
    if(this.props.mode==="usageBase"){
        this.setState(
            {
                open: false,
                time: false,
                usage: true,
                descrpition: false,
                drawerHeader: "Usage Base Categories"
            }
        )
    }else if(this.props.mode==="timeBase"){
        this.setState(
            {
                open: false,
                time: true,
                usage: false,
                descrpition: false,
                drawerHeader: "Time Base Categories"
            }
        )
    }

  }


  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  drawerTimeIconClick() {
    this.setState({
      time: true,
      usage: false,
      descrpition: false,
      drawerHeader: "Time Base Categories"
    });
    console.log("drawer icon clicked");
  }
  drawerUsageIconClick() {
    this.setState({
      time: false,
      usage: true,
      descrpition: false,
      drawerHeader: "Usage Base Categories"
    });
    console.log("drawer usage clicked");
  }
  drawerDescriptionIconClick() {
    this.setState({
      time: false,
      usage: false,
      descrpition: true,
      drawerHeader: "Description about electricity bill calculation"
    });
    console.log("drawer description clicked");
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open
          })}
        >
            <Toolbar
              style={customStyle.toolbar}
              disableGutters={!this.state.open}
            >
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(classes.menuButton, {
                      [classes.hide]: this.state.open
                    })}
                  >
                  <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" color="inherit" noWrap>
                    {this.state.drawerHeader}
                  </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open
            })
          }}
          open={this.state.open}
        >
            <div className={classes.toolbar}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem onClick={this.drawerTimeIconClick} button key={"Time"}>
                <ListItemIcon>
                    <Alarm color="primary" />
                </ListItemIcon>
                <ListItemText primary={"Time base calculation"} />
              </ListItem>
              <ListItem onClick={this.drawerUsageIconClick} button key={"Usage"}>
                <ListItemIcon>
                    <Usage color="primary" />
                </ListItemIcon>
                <ListItemText primary={"Usage base calculation"} />
              </ListItem>
              <ListItem onClick={this.drawerDescriptionIconClick} button key={"Description"}>
                <ListItemIcon>
                  <Description color="primary" />
                </ListItemIcon>
                <ListItemText primary={"Application description"} />
              </ListItem>
            </List>
            <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.state.time ? (
            <BaseContentForCalculator openDialog={this.handleClickOpen} />
          ) : this.state.descrpition ? (
            <BaseContentForDescription />
          ) : this.state.usage ? (
            <BaseContentForUsage />
          ) : (
            <h1>This part is under construction</h1>
          )}
        </main>
      </div>
    );
  }
}

Calculator.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Calculator);
