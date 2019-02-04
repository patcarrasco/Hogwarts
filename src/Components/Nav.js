import React from 'react'
import {Menu, Segment, Modal, Button, Header, Input} from 'semantic-ui-react'
import CharacterForm from './CharacterForm';

export default class Nav extends React.PureComponent {

    state = {activeItem: 'addACharacter', showModal: false}

    handleClick = (e, {name}) => {
        this.setState({activeItem: name})
    }

    toggleModal = (e, {name}) => {
        this.setState({activeItem: name, showModal: true})
    }

    closeModal = (e) => {
        this.setState({showModal: false})
    }

    preventProp = (e) => {
        console.log(e)
        e.stopPropagation()
    }

    render() {
        const activeItem = this.state.activeItem

        return (
            <Segment inverted >
                <Menu inverted pointing secondary>
                    <Input size='medium' placeholder='Search Characters...' value={this.props.searchTerm} onChange={this.props.searchChars} />
                    <Menu.Menu position="right">
                        <Menu.Item name="addACharacter" active={activeItem === "addACharacter"} onClick={this.toggleModal} />
                    </Menu.Menu>
                </Menu>
                {this.state.showModal ? 
                <Modal basic open={this.state.showModal} onClose={this.toggleModal} size='small' >
                    <Header content="Add a Star"/>
                    <Modal.Actions>
                        <Button size="small" color="green" onClick={this.closeModal}> Back to Page </Button>
                    </Modal.Actions>
                    <Modal.Content>
                        <CharacterForm addCharacter={this.props.addCharacter} /> 
                    </Modal.Content>
                </Modal>
                : null}
            </Segment>
        )
    }
}