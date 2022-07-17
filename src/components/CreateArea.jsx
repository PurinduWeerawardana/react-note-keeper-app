import React,{useState} from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  function getNewNotes(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNewNote((prev) => {
      if (name === "title") {
        return { title: value, content: prev.content };
      } else if (name === "content"){
        return { title: prev.title, content: value };
      }
    });
  }
  function submitNote(event){
    event.preventDefault();
    props.onAdd(newNote)
  }

  return (
    <div>
      <form>
        <input onChange={getNewNotes} name="title" placeholder="Title" />
        <textarea onChange={getNewNotes} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
