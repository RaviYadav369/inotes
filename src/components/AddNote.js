import React,{useContext,useState} from 'react'
import NotesContext from "../context/notes/NotesContext"

export default function AddNote(props) {
    const context = useContext(NotesContext);
    const { addNote } = context;
    const [note, setNotes] = useState({title:"",description:"",tag:""})

    const handleClick=(e)=>{
        e.preventDefault();
    addNote(note.title,note.description,note.tag);
    props.showAlert('Notes is Created Succesfully','success');
    setNotes({title:"",description:"",tag:""})
    }

    const onChange =(e)=>{
      setNotes({...note,[e.target.name]:e.target.value});
    }
  return (
    <div className='container my-3'>
          <h1>Add Notes</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" minLength={5} required value={note.title} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name='description' minLength={5} value={note.description} required onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name='tag' value={note.tag} minLength={5} required onChange={onChange} />
        </div>
        <button disabled={ note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
      </form>
      <div className='container my-3'></div>
    </div>
  )
}
