import React, { Component } from 'react';

import GridContainer from '../../atoms/Grid/GridContainer';
import GridItem from '../../atoms/Grid/GridItem';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

import ServiceUtil from '../../../utils/serviceUtil';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  submitMessage = event => {
    event.preventDefault();

    const txtMessage = this.state.message;

    if (txtMessage.trim().length === 0) {
      return;
    }

    const requestData = {
      query: `
        mutation {
          createMessage(messageInput: {title: "${txtMessage}"}) {
            _id
            title
          }
        }
      `,
    };

    ServiceUtil.triggerRequest({
      url: 'http://localhost:4000/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(requestData),
    })
      .then(response => {
        // console.log('response>>> ', response); // eslint-disable-line
        const { data } = response && response.body;
        console.log('response data>>> ', data); // eslint-disable-line
      })
      .catch(error => {
        console.log('error>>> ', error); // eslint-disable-line
      });
  };

  render() {
    const { message } = this.state;

    return (
      <div>
        <GridContainer justify="center">
          <GridItem xs={10}>
            <h2>Enter your message below:</h2>
            <form noValidate autoComplete="off" onSubmit={this.submitMessage}>
              <div>
                <Input
                  labelText="Message"
                  formControlProps={{
                    required: true,
                  }}
                  inputProps={{
                    value: message,
                    onChange: this.handleChange('message'),
                    'aria-label': 'Message Input',
                  }}
                />
              </div>
              <div>
                <Button type="submit" color="primary">
                  Default
                </Button>
              </div>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default MessageForm;
