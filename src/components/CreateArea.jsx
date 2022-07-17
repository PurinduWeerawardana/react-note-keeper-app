import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  function getNewNotes(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNewNote((prev) => {
      if (name === "title") {
        return { title: value, content: prev.content };
      } else if (name === "content") {
        return { title: prev.title, content: value };
      }
    });
  }
  function submitNote(event) {
    event.preventDefault();
    props.onAdd(newNote);
    setNewNote({ title: "", content: "" });
  }
  const [isExpanded, setIsExpanded] = useState(false);
  function expand() {
    setIsExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={getNewNotes}
            value={newNote.title}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onChange={getNewNotes}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          onClick={expand}
          value={newNote.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddCircleIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
