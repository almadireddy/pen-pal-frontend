import React, { Component } from "react";
import CheckboxContainer from './CheckboxContainer';

export default class Questionnaire extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='questionnaire'>
        <h1>Interests Profiler</h1>
        {!!this.props.questions && Object.keys(this.props.questions).map((key) => (
          <div className='questionnaire-topic'>
            <h2>Topic: {key}</h2>
            <hr></hr>
            {this.props.questions[key].map((question) => (
              <div className='questionnaire-question'>
                <h4>{question.question}</h4>
                <div className='questionnaire-options'>
                  <CheckboxContainer checkboxes={question.choices}></CheckboxContainer>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}