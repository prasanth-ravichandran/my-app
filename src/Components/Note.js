import React from "react";
import { Delete } from "@mui/icons-material";
const Note = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="notes">
      <h1>{props.tittle}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <Delete />
      </button>
    </div>
  );
};

export default Note;
