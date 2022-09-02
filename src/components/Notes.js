import { React, useContext, useEffect, useState } from "react";
import NotesContext from "../context/notes/NotesContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Notes(props) {
  const context = useContext(NotesContext);
  const { notes, getNote, editNote, } = context;
  const ref = useRef(null);
  const refClose = useRef(null);
  const navigation = useNavigate();


  useEffect(() => {
    if(localStorage.getItem('token')){
      getNote();
    }
    else{
      navigation('/login')
    }
  }, []);
  const [note, setNotes] = useState({ _id: "", etitle: "", edescription: "", etag: "" })

  const updateNote = (currentNote) => {
    ref.current.click();
    setNotes({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
  };


  const handleClick = (e) => {
    e.preventDefault();
    // console.log("updating note", note);
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
  }

  const onChange = (e) => {
    setNotes({ ...note, [e.target.name]: e.target.value });
  }
  const {showAlert}= props;

  return (
    <>
      <AddNote showAlert={showAlert} />
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" >
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" value={note.etitle} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3 ">
        <h1> Your Notes</h1>
        <div className="container">
          {notes.length === 0 && 'No Notes To Display'}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
}
