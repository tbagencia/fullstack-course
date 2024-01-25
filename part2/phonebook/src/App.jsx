import { useState } from "react"
import Persons from "../components/Persons"
import Filter from "../components/Filter"
import New from "../components/New"

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName,setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filterText,setFilterText] = useState('')

  const addName = (event) => {

    event.preventDefault()

    const result = persons.filter((person) => person.name === newName)

    if(result.length) {
      return alert(`${newName} is already added to phonebook`)
    }

    const newObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(newObject))
    setNewName('')
    setNewNumber('')
  }

  const handleFilterChange = (event) =>{
    setFilterText(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <Filter filterText={filterText} handleFilterChange={handleFilterChange}/>
      <New submit={addName} name={newName} namefn={handleNameChange} number={newNumber} numberfn={handleNumberChange} />
      <Persons persons={persons} filter={filterText}/>
    </div>
  )
}

export default App
