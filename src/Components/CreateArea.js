import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
const CreateArea = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    tittle: "",
    content: "",
  });
  function expand() {
    setIsExpanded(true);
  }
  //console.log(note);
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNote((preNote) => {
      return {
        ...preNote,
        [name]: value,
      };
    });
  }
  function sumbitNote(event) {
    props.onadd(note);
    setNote({
      tittle: "",
      content: "",
    });
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="tittle"
            placeholder="Tittle"
            value={note.tittle}
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a Note....."
          rows={isExpanded ? 3 : 1}
          onClick={expand}
          onChange={handleChange}
          value={note.content}
        ></textarea>
        <Zoom in={isExpanded}>
          <Fab onClick={sumbitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
