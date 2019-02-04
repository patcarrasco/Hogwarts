import React from "react";
import {Header, Card} from 'semantic-ui-react'
import CharacterCard from './CharacterCard'

export default class House extends React.PureComponent {
 
  chars = () => {
    return this.props.characters.map((e, idx) => <CharacterCard key={idx} character={e} image={e.image2} fromHouse={true} houseChange2={this.props.houseChange2}/> ) 
  }

  render() {
    return (
      <Card.Group>
        <Header as='h2' >
          {this.props.house}
        </Header>
        {this.chars()}
      </Card.Group>
    )
  };
};


