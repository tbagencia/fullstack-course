import { useEffect, useState } from "react"
import Note from "../components/Note"
import NoteService from './services/notes'

const App = () => {
  const [notes,setNotes] = useState([])
  const [newNote,setNewNote] = useState('')
  const [showAll,setShowAll] = useState(true)
  
  const toggleImportanceOf = (id) =>{
    const note = notes.find(n=>n.id === id)
    const changedNote = {...note, important:!note.important}

    NoteService
    .update(id,changedNote)
    .then(returnedNote=>{
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
    .catch(error=>{
      alert (`The note '${note.content}' was already deleted from server`)
      setNotes(notes.filter(n => n.id !== id))
    })

  }

  const hook = () => {
    NoteService
    .getAll() 
    .then(initialNotes => {
      setNotes(initialNotes)
     });
  }

  useEffect(hook,[])


  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }

    NoteService
    .create(noteObject)
    .then(returnedNote =>{
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  //console.log(notes.length)

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)

  //console.log(notesToShow);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note=>
          <Note 
          key={note.id} 
          note={note} 
          toggleImportance={() => toggleImportanceOf(note.id)}
          />
          )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} placeholder="a new note..." onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App
