import React, { Component } from "react";
import Dropdown from "react-dropdown";
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
        <div className='inputs'>
          <input onChange={this.props.nameChange} placeholder='your name'></input>
          {/* <input onChange={this.props.langChange} placeholder='your language'></input> */}
          <div className='lang-container'>
            <div className='select'>
              <select onChange={this.props.langChange}>
                {options.map((opt) => (
                  <option value={opt.label}>{opt.value}</option>
                ))}
              </select>
            </div>
          </div>
          <button onClick={this.props.onClick} className='action-on-dark'>Questions</button>
        </div>
      </header>
    );
  }
}

const options = [
  {
    value: "English", label: "en"
  },
  {
    value: "Spanish", label: "es"
  },
  {
    value: "Dutch", label: "nl"
  },
  {
    value: "Telugu", label: "te"
  },
  {
    value: "Hindi", label: "hi"
  },
  {
    value: "Russian", label: "ru"
  },
  {
    value: "French", label: "fr"
  },
  {
    value: "Arabic", label: "ar"
  }
]