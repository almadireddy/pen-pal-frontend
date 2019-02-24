import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class ChatMessage extends Component {
  render() {
    let classes = 'chatMessage';
    if (this.props.local) {
      classes += ' local'
    }
    return(
      <div className={classes}>
        <p className='message-text'>{this.props.text}</p>
        <p className='message-lang'>{this.props.lang}-<span className='username'>{this.props.username}</span></p>
      </div>
    )
  }
}

ChatMessage.propTypes = {
  lang: PropTypes.string,
  text: PropTypes.string,
  local: PropTypes.bool
}