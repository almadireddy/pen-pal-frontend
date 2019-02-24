import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className='app-header'>
        <div>
          <h1 className="app-title">pen-pal: Discover the world!</h1>
        </div>
        <div>
          <input onChange={this.props.nameChange} placeholder='your name'></input>
          <input onChange={this.props.langChange} placeholder='your language'></input>
          <button onClick={this.props.onClick} className='action-on-dark'>Questions</button>
        </div>
      </header>
    );
  }
}