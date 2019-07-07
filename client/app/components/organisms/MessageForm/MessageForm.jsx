import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { GridContainer, GridItem, Input, Button } from 'app-components';
import ServiceUtil from 'app-utils/serviceUtil';

const mszQuery = gql`
  {
    messages {
      _id
      title
    }
  }
`;

/* istanbul ignore next */
class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      messageArr: [],
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
        alert('Successfully Submitted!!!'); // eslint-disable-line
      })
      .catch(error => {
        console.log('error>>> ', error); // eslint-disable-line
      });
  };

  getMessages = () => {
    const requestData = {
      query: `
        query {
          messages {
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
        this.setState({
          messageArr: data.messages,
        });
      })
      .catch(error => {
        console.log('error>>> ', error); // eslint-disable-line
      });
  };

  /* eslint-disable react/no-array-index-key, no-underscore-dangle */
  renderList(messageArr) {
    let messageList;
    console.log('messageArr====>> ', messageArr);
    if (messageArr && messageArr.length > 0) {
      messageList = messageArr.map((msz, index) => {
        return (
          <li key={index}>
            <p>{msz.title}</p>
            <p>{msz._id}</p>
          </li>
        );
      });
    } else {
      messageList = null;
    }

    return messageList;
  }

  render() {
    const { message, messageArr } = this.state;

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
                  Submit
                </Button>
              </div>
            </form>
          </GridItem>
          <GridItem xs={10}>
            <h2>List of messages sumitted:</h2>
            <Query query={mszQuery}>
              {({ loading, error, data }) => {
                if (loading) {
                  return (
                    <GridContainer
                      direction="row"
                      justify="center"
                      spacing={24}
                      style={{ padding: 24 }}
                    >
                      Loading...
                    </GridContainer>
                  );
                }
                if (error) {
                  return (
                    <GridContainer
                      direction="row"
                      justify="center"
                      spacing={24}
                      style={{ padding: 24 }}
                    >
                      <div>Please Sign In to fetch data</div>
                    </GridContainer>
                  );
                }
                return (
                  <React.Fragment>
                    {data.messages.map(msz => (
                      <GridItem key={msz._id} xs={6} sm={4} lg={3} xl={2}>
                        <div>{msz.title}</div>
                      </GridItem>
                    ))}
                  </React.Fragment>
                );
              }}
            </Query>
            <div>
              <Button color="primary" outlined onClick={this.getMessages}>
                Get All Messages
              </Button>
              <div>
                <ul>{this.renderList(messageArr)}</ul>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default MessageForm;
