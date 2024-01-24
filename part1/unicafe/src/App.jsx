import { useState } from "react"

const Button = ({onclick,text}) => {
  return(
    <button onClick={onclick}>{text}</button>
  )
}

const StatisticLine = props => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = (props) => {
  const title = "statistics"
  if(props.totalClicks === 0){
    return(
      <div>
      <h2>{title}</h2>
      <p>No feedback given</p>
      </div>
    )
  }
  return(
    <div>
    <h2>{title}</h2>
    <table>
    <tbody>
    <StatisticLine text='good' value={props.good} />
    <StatisticLine text='neutral' value={props.neutral} />
    <StatisticLine text='bad' value={props.bad} />
    <StatisticLine text='all' value={props.totalClicks} />
    <StatisticLine text='average' value={props.average} />
    <StatisticLine text='positive' value={props.positive + '%'} />
    </tbody>
    </table>
    </div>
  )
}

const App = () => {

  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  const [totalClicks,setClicks] = useState(0)
  const [total,setTotal] = useState(0)
  const [average,setAverage] = useState(0)
  const [positive,setPositive] = useState(0)

  const handleSetGood = () => {
    const updatedGood = good + 1
    const updatedTotalClicks = updatedGood+neutral+bad
    const updatedTotal = total + 1
    setGood(updatedGood)
    setClicks(updatedTotalClicks)
    setTotal(updatedTotal)
    setAverage(updatedTotal/updatedTotalClicks)
    setPositive(updatedGood/updatedTotalClicks*100)
  }

  const handleSetNeutral = () => {
    const updatedNeutral = neutral + 1
    const updatedTotalClicks = updatedNeutral+good+bad
    const updatedTotal = total
    setNeutral(updatedNeutral)
    setClicks(updatedTotalClicks)
    setTotal(updatedTotal)
    setAverage(updatedTotal/updatedTotalClicks)
    setPositive(good/updatedTotalClicks*100)
  }

  const handleSetBad = () => {
    const updatedBad = bad + 1
    const updatedTotalClicks = updatedBad+good+neutral
    const updatedTotal = total - 1
    setBad(updatedBad)
    setClicks(updatedTotalClicks)
    setTotal(updatedTotal)
    setAverage(updatedTotal/updatedTotalClicks)
    setPositive(good/updatedTotalClicks*100)
  }

  return(
    <div>
      <h2>give feeedback</h2>
      <Button onclick={handleSetGood} text='good' />
      <Button onclick={handleSetNeutral} text='neutral' />
      <Button onclick={handleSetBad} text='bad' />
      <Statistics totalClicks={totalClicks} average={average} positive={positive} good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App