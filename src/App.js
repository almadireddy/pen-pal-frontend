import React, { Component } from 'react';
import './App.scss';
import { connect } from './api';
import Modal from 'react-modal';
import CheckboxContainer from './components/CheckboxContainer';


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
          <h1 className="app-title">Welcome to international sexting!</h1>
        </header>
        <button onClick={this.openModal}>Quesitons</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          {!!this.state.questions && Object.keys(this.state.questions).map((key) => (
            <div>
              <h2>Topic: {key}</h2>
              <hr></hr>
              {this.state.questions[key].map((question) => (
                <div>
                  <h4>{question.question}</h4>
                  {console.log(question.choices)}
                  <CheckboxContainer checkboxes={question.choices}></CheckboxContainer>
                </div>
              ))}
            </div>
          ))}
        </Modal>
      </div>
    )
  }
}
export default App;
