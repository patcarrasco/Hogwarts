import React from "react";
import HouseForm from "./HouseForm"
import {Card, Image, Icon, Button, Transition} from "semantic-ui-react"
import CharacterDetails from "./CharacterDetails";

class CharacterCard extends React.Component {
  state = {editHouse:false, showDetails: false}

  toggleDetails = () => {
    if (this.props.fromHouse) {
      this.setState({showDetails: !this.state.showDetails})
    }
  }

  toggleForm = () => {
    this.setState({editHouse: !this.state.editHouse})
  }

  changeHouseForm = () => {
    return (
    <Card.Content extra>
      <Button fluid basic onClick={this.toggleForm}>
        <Icon name="home" />
        {this.props.character.house}
      </Button>
      {this.state.editHouse ? <HouseForm charId={this.props.character.id} houseChange={this.props.houseChange} toggleForm={this.toggleForm}/> : null}
    </Card.Content>
    )
  }

  characterGroup = () => {
    return (
      <Card.Content>
        {this.cardImage()}
        <Card.Header> {this.props.character.name} </Card.Header>
        <Card.Meta> {this.props.character.role} </Card.Meta>
      </Card.Content>
    )
  }

  cardImage = () => {
    if (this.props.houseChange) {
      return  <Image floated="right" src={this.props.image} avatar size="massive"/>
    } else {
      return  <Image fluid src={this.props.image}/>
    }
  }

  cardMeta = () => {
    return <Card.Meta> {this.props.character.role} </Card.Meta>
  }

  cardContent = () => {
    return (
      <Card> 
        {this.props.houseChange ? this.characterGroup() : this.cardImage()}
        {this.props.houseChange ? this.changeHouseForm() : null}
      </Card>
    )
  }

  stopProp = (e) => {
    e.stopPropagation()
  }
 
  render() {
    return (
        <Card color='red' onClick={this.toggleDetails} >
          {this.state.showDetails ? <CharacterDetails stopProp={this.stopProp} character={this.props.character} houseChange={this.props.houseChange2}/> : this.cardContent()}
        </Card>
    )
  }
}

export default CharacterCard;
