import React, { Component } from "react"
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const myObj = {
  _id: '',
  description: ""
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'data': []
    }
  }
  async getQuestions() {
    const url = "http://localhost:8080/quiz/605becdc9bab2e4b5835c1d0"
    const response = await fetch(url);
    const data = await response.json();
    const quizData = data.quiz
    console.log(quizData)
    this.setState({ 'data': quizData })
    console.log(quizData)

    // const oneQuestion = "http://localhost:8080/questions/605becdc9bab2e4b5835c1d0"
    // const res = await fetch(oneQuestion)
    // const oneQuestionData = await res.json();
  }

  componentDidMount() {
    this.getQuestions()
  }


  changeColor = (btn) => {
    return
  }

  render() {
    const settings = {
      fade: true,
      slidesToShow: 1,
      arrows: true,
      sldesToScroll: 1,
    }
    const handleClick = (correct, id) => {
      if (correct)
        document.getElementById(id).className = 'incorrect'
      else
        document.getElementById(id).className = 'correct'
    }


    return (
      <div className="App">

        {}
        {false ? (
          <div className='score-section'>You scored 1 out of</div>
        ) : (
          <div>
            <div className='question-section' >
              {this.state.data.map((item, index) => {
                return (
                  <div>
                    <div className='question-count'>
                      <span>Question {index + 1} </span> / {this.state.data.length}
                    </div>
                    <div className='question-text'>{item.description}</div>
                    <div className="answer-section">
                      {item.alternatives.map((answers) => {
                        return <button class="btn" disableElevation id={answers._id} onClick={() => { handleClick(answers.isCorrect, answers._id) }}>{answers.text}</button>
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
