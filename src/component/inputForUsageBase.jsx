import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

class InputForUsageBase extends Component {
  state = {
    query: "pending",
    result: "your bill is Rs 96.23",
    start:"",
    end:"",
    units:0,
    error:""
  };
  handleStart=(e)=>{
    console.log(e.target.value)
    this.setState({
            start: e.target.value
        }
    )
  };
  handleEnd = (e)=>{
    console.log(e.target.value)
    this.setState({
            end:e.target.value
        }
    )
  };
  handleUnit =(e)=>{
    console.log(e.target.value)
    this.setState({
            units:e.target.value
    })
  };
  handleClickLoading = () => {
    this.setState({
      query: "progress"
    });
    let url="http://localhost:8080/api/usageBase?start="+this.state.start+"&end="+this.state.end+"&units="+this.state.units+
        "&category="+this.props.category
    console.log(url)
    fetch(url)
        .then(res =>res.json())
        .then((result)=>{
            if(result.error===""){
                this.setState(
                    {
                        query:"success",
                        result:"your bill is Rs "+result.bill,
                        start:result.startDay,
                        end:result.endDate
                    }
                )
            }else{
                this.setState({
                    query:"error",
                    error:result.error,
                })
            }

        },(error)=>{
          console.log("Error Happened",error)
          this.setState(
              {
                  query:"error",
                  error:error.toString()
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
              id="date"
              label="Date start"
              type="date"
              defaultValue="2017-05-24"
              style={theme.textField}
              InputLabelProps={{
                shrink: true
              }}
              onChange={
                this.handleStart
              }
            />

            <Divider variant="inset" />

            <TextField
              id="date"
              label="Date finished"
              type="date"
              defaultValue="2017-05-24"
              style={theme.textField}
              InputLabelProps={{
                shrink: true
              }}
              onChange={
                this.handleEnd
              }
            />

            <Divider variant="inset" />

            <TextField
              id="standard-number"
              label="consumed units"
              type="number"
              style={theme.textField}
              InputLabelProps={{
                shrink: true
              }}
              onChange={
                this.handleUnit
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
                  <Typography component="h2" variant="display1">bill start day {this.state.start}</Typography>
                  <Typography component="h2" variant="display1">bill end day {this.state.end}</Typography>
                  <Typography component="h2" variant="display1">{this.state.result}</Typography>
              </div>
          ) : query === "error" ? (
              <div>
                  <Typography component="h2" variant="display1">Error occured {this.state.error}</Typography>
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

export default InputForUsageBase;
