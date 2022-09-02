import React, { useContext } from 'react'
import noteContext from '../context/notes/NotesContext';

export default function NoteItem(props) {
    const context = useContext(noteContext)
    const { deleteNote } = context
    const { note, updateNote } = props;

    return (
        <div className='col-md-3'>

            <div className="card my-3" >
                <div className="card-body">
                    <div className='d-flex justify-content-between'>
                        <div className='inline mx-2'>
                            <h5 className="card-title">{note.title}</h5>
                        </div>
                        <div>

                            <i className='fas fa-pencil-alt mx-2 fa-lg ' onClick={() => { updateNote(note) }}></i>
                            <i className='fas fa-trash-alt mx-2 fa-lg ' onClick={() => { deleteNote(note._id) }} ></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <h5>
                        <span className="badge bg-primary ">{note.tag}</span>
                    </h5>
                </div>
            </div>
        </div>
    )
}
