import { useState } from "react"

const MostVoted = ({anecdotes}) => {
  const mostVoted = anecdotes.reduce((a,b) => a.votes > b.votes ? a : b)

  return(
    <div>
      <h2>Anecdote whith most votes</h2>
      <p>{mostVoted.text}</p>
      <p>has {mostVoted.votes} votes</p>
    </div>
  )
}

function App() {
  const anecdotesArr = [
    {text: 'If it hurts, do it more often.', votes: 0},
    {text: 'Adding manpower to a late software project makes it later!', votes: 0},
    {text: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0},
    {text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0},
    {text: 'Premature optimization is the root of all evil.', votes: 0},
    {text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0},
    {text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', votes: 0},
    {text: 'The only way to go fast, is to go well.', votes: 0},
  ]


  const [selected,setSelected] = useState(0)
  const [anecdotes,setPoints] = useState(anecdotesArr)

  const updateSelected = () => {
    const arrayLength = (anecdotes.length)
    const getRandomNum = (max) => Math.floor(Math.random() * max)
    setSelected(getRandomNum(arrayLength))
  }

  const updatePoints = () => {
    const copy = [...anecdotes]
    copy[selected].votes += 1
    setPoints(copy)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected].text}</p>
      <p>has {anecdotes[selected].votes} votes</p>
      <button onClick={updatePoints}>vote</button>
      <button onClick={updateSelected}>next anecdote</button>
      <MostVoted anecdotes={anecdotes}/>
    </div>
  )
}

export default App
