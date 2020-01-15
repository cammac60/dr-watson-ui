import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hasErrored } from '../../actions';
import { postMessage } from '../../apiCalls';
import Message from '../../components/Message/Message'

import "./ChatBox.css"

export class ChatBox extends Component {
  constructor() {
    super();
    this.state = { message: '' }
    this.convo = createRef();
  }

  componentDidUpdate() {
    this.convo.scrollTop = this.convo.scrollHeight;
  }

  handleChange = e => {
    this.setState({ message: e.target.value });
  }

  handleSubmit = e => {
    if (e.key === 'Enter' || e.button === 0) {
      const { message } = this.state;
      this.props.addMessage(message, true);
      this.messageChatBot(message);
      this.setState({ message: '' });
    }
  }

  messageChatBot = async (message) => {
    try {
      const messageResponse = await postMessage(message);
      this.props.addMessage(messageResponse.message, false);
    } catch({ message }) {
      this.props.hasErrored(message)
    }
  }

  render() {
    const { message } = this.state;
    const { messages, errorMsg } = this.props;
    console.log(messages);
    const survey = messages.map((msg, i) => {
      return <Message
        key={`message${i}`}
        message={msg.message}
        isUser={msg.isUser}
      />
    })
    return (
      <main className="chat-container">
        <section className="conversation" ref={node => this.convo = node}>
          {survey}
          {errorMsg && <p className="message watson error">{errorMsg}</p>}
        </section>
        <section className="messenger">
          <input
            placeholder='Chat with Survey Bot here...'
            value={message}
            onChange={this.handleChange}
            onKeyPress={this.handleSubmit}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </section>
      </main>
    )
  }
}

export const mapStateToProps = ({ errorMsg }) => ({
  errorMsg
})

export const mapDispatchToProps = dispatch => bindActionCreators({ hasErrored }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
