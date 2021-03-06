import React, { Component } from 'react';
import './App.scss';
import { connect, send } from './api';
import Modal from 'react-modal';
import Questionnaire from './components/Questionnaire';
import Header from './components/Header'
import Body from './components/Body'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doingQuestions: true,
      questions: null,
      messages: [],
      targetLanguage: 'es',
      language: "en",
      user: "Al"
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleLangChange = this.handleLangChange.bind(this);

    connect((message) => {
      this.setState((state) => {
        console.log(this.state.messages)
        return {
          messages: [...state.messages, message]
        }
      })
    }, (message) => {
      send({
        preferredLanguage: this.state.language,
        username: this.state.user
      }, 'fred')
    }, (message) => {
      console.log(message)
      if (message.username !== this.state.user) {
        this.setState({
          targetLanguage: message.preferredLanguage
        })
      }
    })
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

  handleNameChange(event) {
    this.setState({
      user: event.target.value
    })
  }

  handleLangChange(event) {
    send({
      preferredLanguage: event.target.value,
      username: this.state.user
    }, 'fred')
    this.setState({
      language: event.target.value
    })
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
        <Header langChange={this.handleLangChange} nameChange={this.handleNameChange} onClick={this.openModal}></Header>
        <Modal
          className='questionnaire-modal'
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal" >
          <Questionnaire questions={this.state.questions}></Questionnaire>
          <button className='center action-on-dark' onClick={this.closeModal}>Save</button>
        </Modal>
        <Body username={this.state.user} language={this.state.language} targetLanguage={this.state.targetLanguage} messages={this.state.messages}></Body>
      </div>
    )
  }
}
export default App;
