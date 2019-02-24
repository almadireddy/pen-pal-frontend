import React, { Component } from "react";
import ChatContainer from "./ChatContainer";

export default class Body extends Component {
  render() {
    return(
      <div className='messaging'>
        <ChatContainer language={this.props.language} messages={this.props.messages}></ChatContainer>
        <div className='messaging-right'>
          <div className='conversation active'>
            <h3>Talk about food!</h3>
            <h4>Arjun</h4>
            <p>Mexico</p>
          </div>
          <div className='conversation'>
            <h3>What is god?</h3>
            <h4>Patrick</h4>
            <p>South Dakota</p>
          </div>
          <div className='conversation'>
            <h3>What is your mother's maiden name</h3>
            <h4>Varun</h4>
            <p>India</p>
          </div>
        </div>
      </div>
    )
  }
}