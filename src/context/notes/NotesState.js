import { React, useState } from "react";
import NoteContext from "./NotesContext";

const NoteState = (props) => {

  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //get all notes
  const getNote = async () => {
    //to do api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      }
    });
    const json = await response.json();
    setNotes(json);
    // console.log(json);
  };

  //add the note
  const addNote = async (title, description, tag) => {
    //to do api call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
    // console.log(note);
  };

  //delete the note
  const deleteNote = async (id) => {
    //to do api call
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    // const json = response.json();
    // console.log(json);
    // console.log("delete note with id" + id);
  
    setNotes(newNote);
  };

  //edit note
  const editNote = async (id, title, description, tag) => {
    // add api call
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    const newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
