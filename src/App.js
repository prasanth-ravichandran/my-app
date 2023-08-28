import { useState } from "react";
import "./App.css";
import CreateArea from "./Components/CreateArea";
import Header from "./Components/Header";
import Note from "./Components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((preNotes) => {
      return [...preNotes, newNote];
    });
  }
  console.log(notes);
  function deleteNote(id) {
    setNotes((preNotes) => {
      return preNotes.filter((_, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <div>
        <Header />
        <CreateArea onadd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              tittle={noteItem.tittle}
              content={noteItem.content}
              id={index}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
