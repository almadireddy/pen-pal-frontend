import React, { Component } from 'react';
import './App.scss';
import { connect } from './api';
import Modal from 'react-modal';
import CheckboxContainer from './components/CheckboxContainer';
import Questionnaire from './components/Questionnaire';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doingQuestions: true,
      questions: null,
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    
    // connect(message => {
    //   console.log(message)
    // })
  }

  async componentDidMount() {
    let r = await fetch('https://mysterious-temple-49438.herokuapp.com/questions')
    let j = await r.json();
    for (let k in j) {
      j[k].forEach(q => {
        q.choices = q.choices.map((choice) => {
          return {
            name: choice,
            key: choice,
            label: choice
          }
        })
      });
    }
    this.setState({questions: j})
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
    return (
      <div className="App">
        <header className='app-header'>
          <div>
            <h1 className="app-title">Welcome to international sexting!</h1>
          </div>
          <div>
            <button onClick={this.openModal} className='action-on-dark'>Questions</button>
          </div>
        </header>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <Questionnaire questions={this.state.questions}></Questionnaire>
        </Modal>
      </div>
    )
  }
}
export default App;
