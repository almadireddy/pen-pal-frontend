import React, {Component} from 'react';

export default class QuestionForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    (this.props.questions.map((q) => 
      <div></div>
    ))
  }
}
