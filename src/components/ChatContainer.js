import React, { Component } from "react";
import ChatMessage from "./ChatMessage";
import { send } from "../api";

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: ""
    }

    this.handleCompose = this.handleCompose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCompose(event) {
    this.setState({newMessage: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    send({
      targetLang: this.props.targetLanguage,
      text: this.state.newMessage,
      username: this.props.username,
      lang: this.props.language
    })
    this.setState({
      newMessage: ""
    })
  }

  render() {
    return (
      <div className='chat-container'>
        <div className='messages'>
          {!!this.props.messages && this.props.messages.map((chat) => (
            Object.keys(chat).map((key) => (
              (key === this.props.language &&
                (<ChatMessage username={chat.username} lang={chat[key].language} text={chat[key].message} local={chat.username == this.props.username ? true : false}></ChatMessage>) 
              )
            ))
          ))}
        </div>
        <div className='compose-message'>
          <form id='composeForm' onSubmit={this.handleSubmit}>
            <input value={this.state.newMessage} onChange={this.handleCompose} placeholder="send your pen pal a message!"></input>
            <button form='composeForm' className='action-on-dark' type='submit' value="Send">Send</button>
          </form>
        </div>
      </div>
    )
  }
}