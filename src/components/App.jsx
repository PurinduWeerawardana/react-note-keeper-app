import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNotes(newNote) {
    setNotes((prev) => {
      return [...prev, { title: newNote.title, content: newNote.content }];
    });
  }
  function deleteNotes(noteId) {
    setNotes(notes.filter((note,index)=>{
      return index !== noteId
    }))
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((eachNote, index) => {
        return (
          <Note key={index} id={index} onDelete={deleteNotes} title={eachNote.title} content={eachNote.content} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
