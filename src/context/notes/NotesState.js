import {React,useState} from "react";
import NoteContext from "./NotesContext";

const NoteState =(props)=>{
const notesInitial= [
    {
      "_id": "62b7e66970d95318aff3ef92",
      "user": "62b70ea24242ddc57a9d2a23",
      "title": "My second title updated",
      "description": "this is a second description updated",
      "tag": "personal update",
      "date": "2022-06-26T04:54:01.163Z",
      "__v": 0
    },
    {
      "_id": "62b847f61a64edeefc6e19fc",
      "user": "62b70ea24242ddc57a9d2a23",
      "title": "My third title",
      "description": "this is a third description",
      "tag": "personal",
      "date": "2022-06-26T11:50:14.301Z",
      "__v": 0
    },
    {
        "_id": "62b7e66970d95318aff3ef92",
        "user": "62b70ea24242ddc57a9d2a23",
        "title": "My second title updated",
        "description": "this is a second description updated",
        "tag": "personal update",
        "date": "2022-06-26T04:54:01.163Z",
        "__v": 0
      },
      {
        "_id": "62b847f61a64edeefc6e19fc",
        "user": "62b70ea24242ddc57a9d2a23",
        "title": "My third title",
        "description": "this is a third description",
        "tag": "personal",
        "date": "2022-06-26T11:50:14.301Z",
        "__v": 0
      },
      {
        "_id": "62b7e66970d95318aff3ef92",
        "user": "62b70ea24242ddc57a9d2a23",
        "title": "My second title updated",
        "description": "this is a second description updated",
        "tag": "personal update",
        "date": "2022-06-26T04:54:01.163Z",
        "__v": 0
      },
      {
        "_id": "62b847f61a64edeefc6e19fc",
        "user": "62b70ea24242ddc57a9d2a23",
        "title": "My third title",
        "description": "this is a third description",
        "tag": "personal",
        "date": "2022-06-26T11:50:14.301Z",
        "__v": 0
      }
  ]

  const [notes, setNotes] = useState(notesInitial)
return(
    <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;