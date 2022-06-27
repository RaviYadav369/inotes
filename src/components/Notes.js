import {React,useContext} from 'react'
import NotesContext from "../context/notes/NotesContext"
import NoteItem from './NoteItem';

export default function Notes() {
    const context = useContext(NotesContext);
    const { notes, setNotes } = context;

    return (
        <div className='row my-3 '>
        <h1> Your Notes</h1>
    
       { notes.map((note) => {
            return <NoteItem note ={note} />   
             })}
    </div>
  )
}