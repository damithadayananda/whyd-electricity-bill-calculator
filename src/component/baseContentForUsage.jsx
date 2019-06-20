import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import MyCard from "./Card";

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
class BaseContentForUsage extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid style={customStyle.cardPadding} item xs={12} sm={6}>
          <MyCard
            title="Domestic"
            subTitle="Usage base calculation"
            image="./image/Home.png"
            mode="usage"
            category="domestic"
          />
        </Grid>
        <Grid style={customStyle.cardPadding} item xs={12} sm={6}>
          <MyCard
            title="Industrial"
            subTitle="Usage base calculation"
            image="./image/industrial.png"
            mode="usage"
            category="industrial"
          />
        </Grid>
        <Grid style={customStyle.cardPadding} item xs={12} sm={6}>
          <MyCard
            title="General Purpose"
            subTitle="Usage base calculation"
            image="./image/hospital.jpg"
            mode="usage"
            category="GeneralPurpose"
          />
        </Grid>
        <Grid style={customStyle.cardPadding} item xs={12} sm={6}>
          <MyCard
            title="Hotel"
            subTitle="Usage base calculation"
            image="./image/Hotel.png"
            mode="usage"
            category="Hotel"
          />
        </Grid>
        <Grid style={customStyle.cardPadding} item xs={12} sm={6}>
          <MyCard
            title="Religious"
            subTitle="Usage base calculation"
            image="./image/religous.jpg"
            mode="usage"
            category="Religious"
          />
        </Grid>
      </Grid>
    );
  }
}

export default BaseContentForUsage;
