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
        <p>{this.props.text}</p>
        <p>{this.props.lang}</p>
      </div>
    )
  }
}

ChatMessage.propTypes = {
  lang: PropTypes.string,
  text: PropTypes.string,
  local: PropTypes.bool
}