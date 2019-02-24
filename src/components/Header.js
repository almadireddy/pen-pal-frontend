import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className='app-header'>
        <div>
          <h1 className="app-title">Welcome to international sexting!</h1>
        </div>
        <div>
          <button onClick={this.props.onClick} className='action-on-dark'>Questions</button>
        </div>
      </header>
    );
  }
}