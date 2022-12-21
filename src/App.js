import React,{ useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [userChoice, setUserChoice] = useState('rock')
  const [computerChoice, setComputerChoice] = useState('rock')
  const [userPoints, setUserPoints] = useState(0)
  const [turnResult, setTurnResult] = useState(null)
  const choices = ['rock', 'paper', 'scissors']

  const handleClick = (value) => {
    setUserChoice(value)    
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  useEffect(() => {
    const comboMoves = userChoice + computerChoice;
      if (comboMoves === 'scissorspaper' || comboMoves === 'rockscissors' || comboMoves === 'paperrock') {
        setUserPoints(userPoints + 1)
        setTurnResult('You Won')
      }

      else if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper') {
        setUserPoints(userPoints - 1)
        setTurnResult('You Lose')
      }

      else if (comboMoves === 'paperpaper' || comboMoves === 'rockrock' || comboMoves === 'scissorsscissors') {
        setTurnResult('Draw')
      }
  },[computerChoice,userChoice])

  return (
    <div className='bg-info p-2 text-white bg-opacity-50'>
      <div className="d-flex justify-content-around border border-2 border-dark text-dark" style={{margin:"30px 180px 20px 180px",padding:"10px"}}>
        <div>
        <h2>Rock</h2>
        <h2>Paper</h2>
        <h2>Scissor</h2>
        </div>
      <div>
        <h2>Score</h2>
        <h2>{userPoints}</h2>
      </div>
      </div>
      <div className='choice'>
        <div className='choice-user'>
          <img className='user-hand' src={`../images/${userChoice}.png`} alt=''></img>
        </div>
        <div className='choice-computer'>
          <img className='computer-hand' src={`../images/${computerChoice}.png`} alt=''></img>
        </div>
      </div>
      <div className="conatiner text-center mt-5">
      <button type="button" class="btn btn-outline-dark mx-5" onClick={() => handleClick('rock')}>Rock</button>
      <button type="button" class="btn btn-outline-dark mx-5" onClick={() => handleClick('paper')}>Paper</button><br/>
      <button type="button" class="btn btn-outline-dark my-2" onClick={() => handleClick('scissors')}>Scissor</button>
      </div>
    
      <div className="conatiner text-center text-dark mb-5">
        <h1>{turnResult}</h1>
      </div>
      </div>
  )
}

export default App
