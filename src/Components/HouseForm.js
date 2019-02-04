import React, {PureComponent} from 'react'
import {Form, Segment, Radio, Button} from 'semantic-ui-react'

export default class HouseForm extends PureComponent {
    state = {}

    handleChange = (e, {value}) => this.setState({value})

    handleSubmit = () => {
        this.props.houseChange(this.state.value, this.props.charId)
        !this.props.fromHouse && this.props.toggleForm()
    }


    render() {
        console.log(this.props)
        return (
            <Segment>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        Change House to: <b> {this.state.value} </b>
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label = 'Gryffindor'
                            name = 'houseGroup'
                            value = 'Gryffindor'
                            checked = {this.state.value === 'Gryffindor'}
                            onChange = {this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label = 'Slytherin'
                            name = 'houseGroup'
                            value = 'Slytherin'
                            checked = {this.state.value === 'Slytherin'}
                            onChange = {this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label = 'HufflePuff'
                            name = 'houseGroup'
                            value = 'HufflePuff'
                            checked = {this.state.value === 'HufflePuff'}
                            onChange = {this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label = 'Ravenclaw'
                            name = 'houseGroup'
                            value = 'Ravenclaw'
                            checked = {this.state.value === 'Ravenclaw'}
                            onChange = {this.handleChange}
                        />
                    </Form.Field>
                    <Button fluid color="blue"> Confirm </Button>
                </Form>
            </Segment>
        )
    }
}