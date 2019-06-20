import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import MyCard from "./Card";
import { Button } from "../../node_modules/@material-ui/core";

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
class BaseContentForCalculator extends React.Component {
  render() {
    return (
      // <Button onClick={this.props.openDialog}>click</Button>
      <Grid container>
        <Grid style={customStyle.cardPadding} item xs={12} sm={6}>
          <MyCard
            title="Domestic time base"
            subTitle="time base calculation"
            image="./image/Home.png"
            mode="time"
            category="home"
          />
        </Grid>
        <Grid style={customStyle.cardPadding} item xs={12} sm={6}>
          <MyCard
            title="Industrial I2"
            subTitle="time base calculation"
            image="./image/industrial.png"
            mode="time"
            category="I2"
          />
        </Grid>
        <Grid style={customStyle.cardPadding} item xs={12} sm={6}>
          <MyCard
            title="Industrial I3"
            subTitle="time base calculation"
            image="./image/industrial.png"
            mode="time"
            category="I3"
          />
        </Grid>

        <Grid style={customStyle.cardPadding} item xs={12} sm={6}>
          <MyCard
            title="General Purpose GP2"
            subTitle="time base calculation"
            image="./image/hospital.jpg"
            mode="time"
            category="GP2"
          />
        </Grid>
        <Grid style={customStyle.cardPadding} item xs={12} sm={6}>
          <MyCard
            title="General Purpose GP3"
            subTitle="time base calculation"
            image="./image/hospital.jpg"
            mode="time"
            category="GP3"
          />
        </Grid>
        <Grid style={customStyle.cardPadding} item xs={12} sm={6}>
          <MyCard
            title="Hotel H2"
            subTitle="time base calculation"
            image="./image/Hotel.png"
            mode="time"
            category="H2"
          />
        </Grid>
        <Grid style={customStyle.cardPadding} item xs={12} sm={6}>
          <MyCard
            title="Hotel H3"
            subTitle="time base calculation"
            image="./image/Hotel.png"
            mode="time"
            category="H3"
          />
        </Grid>
      </Grid>
    );
  }
}

export default BaseContentForCalculator;

