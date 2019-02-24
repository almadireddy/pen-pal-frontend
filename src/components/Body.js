import React, { Component } from "react";
import ChatContainer from "./ChatContainer";

export default class Body extends Component {
  render() {
    return(
      <div className='messaging'>
        <ChatContainer username={this.props.username} language={this.props.language} targetLanguage={this.props.targetLanguage} messages={this.props.messages}></ChatContainer>
        <div className='messaging-right'>
          <div className='conversation active'>
            <div className='convo-info'>
              <h3>Talk about food!</h3>
              <h4>Arjun</h4>
              <p>Mexico</p>
            </div>
            <div>
              <img className='fluid-img' src="https://i.kym-cdn.com/entries/icons/facebook/000/012/431/gig.jpg"></img>
            </div>
          </div>
          <div className='conversation'>
            <div className='convo-info'>
              <h3>What is god?</h3>
              <h4>Patrick</h4>
              <p>South Dakota</p>
            </div>
            <div>
              <img className='fluid-img' src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/scooby-shaggy.jpg"></img>
            </div>
          </div>
          <div className='conversation'>
            <div className='convo-info'>
              <h3>Gun control?</h3>
              <h4>Varun</h4>
              <p>India</p>
            </div>
            <div>
              <img className='fluid-img' src="https://external-preview.redd.it/QFfSwIX6OmQIMc8W-wFywq81mtrUL66HEmG2v84XtVY.jpg?width=400&auto=webp&s=802fe5fef7ab2e29f0a2030d4e7e537764693319"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}