import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

class InputForTimeBase extends Component {
  state = {
    query: "pending",
    result: "your bill is Rs 96.23",
    offPeak:0,
    peak:0,
    day:0,
    mDemand:0,
    error:""
  };
  handleOffPeak=(e)=>{
    console.log(e.target.value)
    this.setState({
            offPeak: e.target.value
        }
    )
  };
  handlePeak = (e)=>{
    console.log(e.target.value)
    this.setState({
            peak:e.target.value
        }
    )
  };
  handleDay = (e)=>{
      console.log(e.target.value)
      this.setState(
          {
              day:e.target.value
          }
      )
  }
  handleClickLoading = () => {
    this.setState({
      query: "progress"
    });
    let url="http://localhost:8080/api/timeBase?offPeak="+this.state.offPeak+"&day="+this.state.day+"&peak="+this.state.peak+"&mDemand="+this.state.mDemand+"&category="+this.props.category
    console.log(url)
    fetch(url)
        .then(res =>res.json())
        .then((result)=>{
          console.log(result)
          if(result.error===""){
              this.setState(
                  {
                      query:"success",
                      result:"your bill is Rs "+result.bill+"\n"+". fixed charge Rs "+result.fixed_charge+" added",
                  }
              )
          }else {
              this.setState(
                  {
                      query:"error",
                      error:result.error
                  }
              )
          }

        },(error)=>{
          console.log("Error Happened",error)
          this.setState(
              {
                  query:"error",
                  error:error
              }
          )
        })
  };
  render() {
    const theme = {
      container: {
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "res"
      },
      textField: {
        width: 300
      },
      wrapper: {
        flexWrap: "wrap",
        paddingTop: 100,
        paddingLeft: 200,
        paddingRight: 200
      },
      result: {
        paddingTop: 100,
        paddingLeft: 200,
        paddingRight: 200
      }
    };
    const query = this.state.query;
    return (
      <div>
        <form className={theme.container} noValidate>
          <div style={theme.wrapper}>
            <TextField
              id="offPeak"
              label="Off Peak Units"
              type="number"
              defaultValue="0"
              style={theme.textField}
              InputLabelProps={{
                shrink: true
              }}
              onChange={
                this.handleOffPeak
              }
            />

            <Divider variant="inset" />

            <TextField
              id="peak"
              label="Peak Units"
              type="number"
              defaultValue="0"
              style={theme.textField}
              InputLabelProps={{
                shrink: true
              }}
              onChange={
                this.handlePeak
              }
            />

            <Divider variant="inset" />

            <TextField
                  id="day"
                  label="Day Units"
                  type="number"
                  defaultValue="0"
                  style={theme.textField}
                  InputLabelProps={{
                      shrink: true
                  }}
                  onChange={
                      this.handleDay
                  }
            />

            <Divider variant="inset" />

            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClickLoading}
            >
              submit
            </Button>
          </div>
        </form>
        <div style={theme.result}>
          {query === "success" ? (
              <div>
                  <Typography component="h2" variant="display1">{this.state.result}</Typography>
              </div>
          ) : query === "error" ? (
              <div>
                  <Typography component="h2" variant="display1">{this.state.error}</Typography>
              </div>

          ): query === "progress" ?(
              <CircularProgress />
          ):(
              <div>

              </div>
          )}
        </div>
      </div>
    );
  }
}

export default InputForTimeBase;
