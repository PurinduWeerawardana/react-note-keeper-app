import React from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Note(props) {
  function deleteNote(){
    props.onDelete(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNote}><DeleteForeverIcon/></button>
    </div>
  );
}

export default Note;
