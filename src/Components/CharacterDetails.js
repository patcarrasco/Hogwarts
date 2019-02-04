import React from "react";
import {Card} from 'semantic-ui-react'
import HouseForm from "./HouseForm";



const CharacterDetails = props => {
  console.log(props)
  return (
    <Card> 
      <Card.Content>
        <Card.Header>
          {props.character.name}, {props.character.age}
        </Card.Header>
        <Card.Meta>
          {props.character.role}
        </Card.Meta>
      </Card.Content>
      <Card.Content extra onClick={props.stopProp}>
        <HouseForm houseChange={props.houseChange} charId={props.character.id} fromHouse={true} />
      </Card.Content>
    </Card>
    )
};

export default CharacterDetails;
