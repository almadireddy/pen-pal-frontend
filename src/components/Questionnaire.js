import React, { Component } from "react";
import CheckboxContainer from './CheckboxContainer';

export default class Questionnaire extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {!!this.props.questions && Object.keys(this.props.questions).map((key) => (
          <div>
            <h2>Topic: {key}</h2>
            <hr></hr>
            {this.props.questions[key].map((question) => (
              <div>
                <h4>{question.question}</h4>
                <CheckboxContainer checkboxes={question.choices}></CheckboxContainer>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}