import React from 'react'
import {Form, Button, Segment} from 'semantic-ui-react'

export default class CharacterForm extends React.PureComponent {
    state={name:"", age:"", house:"", role:"", image1:"", image2:""}

    clickHandler = (e) => {
        if (e.target.type === 'submit') {
        } else {
            e.stopPropagation()
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    dropDownHandler = (e, {value}) => {
        console.log({value})
        this.setState({
            house: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addCharacter(this.state)
    }

    houses = () => {
        return [
            {
                text: 'Gryffindor',
                value: 'Gryffindor',
                name: 'house'
            },
            {
                text: 'Slytherin',
                value: 'Slytherin',
                name: 'house'
            },
            {
                text: 'HufflePuff',
                value: 'HufflePuff',
                name: 'house'
            },
            {
                text: 'Ravenclaw',
                value: 'Ravenclaw',
                name: 'house'
            },

        ]
    }

    render() {
        return (
                <Segment>
                    <Form onSubmit={this.handleSubmit} onClick={this.clickHandler}>
                        <Form.Input onChange={this.changeHandler} name='name' label='Name' placeholder='Godric Gryffindor' value={this.state.name} />
                        <Form.Input onChange={this.changeHandler} name='age' label='Age' placeholder='394' value={this.state.age} />
                        <Form.Input onChange={this.changeHandler} name='role' label='Role' placeholder='Legend' value={this.state.role} />
                        <Form.Select labeled placeholder="select house" search fluid options={this.houses()} onChange={this.dropDownHandler} label="House"/>
                        <Form.Input onChange={this.changeHandler} name='image1' label='Avatar Image Link' placeholder='HP7 Image' value={this.state.image1} />
                        <Form.Input onChange={this.changeHandler} name='image2' label='House Image Link' placeholder='Early Image' value={this.state.image2} />
                        <Button color="green" type='submit'> Submit </Button> 
                    </Form>
                </Segment>
        )
    }
}