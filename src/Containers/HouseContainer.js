import React from "react";
import House from "../Components/House";
import {Grid} from 'semantic-ui-react'

export default class HouseContainer extends React.Component {


  houses = () => {
    return this.props.houses.map((h, idx) => {
      return (
        <Grid.Column key={idx}>
            <House key={idx} house={h} characters={this.props.charsByHouse(h)} houseChange2={this.props.houseChange2} /> 
        </Grid.Column>
      )}
    )
  }

  render() {
    return (
      <Grid columns="equal">
          {this.houses()}
      </Grid>
    )
  }
}
