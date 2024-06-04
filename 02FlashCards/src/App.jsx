import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { questionAndAnswers as data } from '../constants'
import Card from './components/Card'

function App() {
  const [index, setIndex] = useState(0)

  const getPrevCard = () => {
    //setIndex(Math.floor(Math.random()*data.length))
    setIndex(prevIndex => prevIndex - 1)
  }

  const getNextCard = () => {
    //setIndex(Math.floor(Math.random()*data.length))
    setIndex(prevIndex => prevIndex + 1)
  }

  return (
    <>
      <h1>The Ultimate Plant Parent</h1>
      <h4>How good of a plant parent are you? Test all of your plant knowledge here!</h4>
      <p>Number of cards: {data.length}</p>
      <Card currentFlashCard = {data[index]}/>
      <button type="previous" className="previousCard" disabled={ index === 0 ? true : false } onClick={getPrevCard}>←</button>
      <button type="next" className="nextCard" disabled={ index === data.length -1 ? true : false } onClick={getNextCard}>⭢</button>
    </>
  )
}

export default App
