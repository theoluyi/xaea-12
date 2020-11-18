import React, { useState } from "react";
import "./index.css";
// import Button from "react-bootstrap/Button";

const NotebookCard = (props) => {
  return <div id={props.color}> </div>;
};

function App() {
  // selectedNoteIndex, selectedNote, notes
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState(null);

  return (
    <div className="full-page">
      <NotebookCard color="dark-blue" />
      <NotebookCard color="dark-red" />
      <NotebookCard color="dark-green" />
      <NotebookCard color="blue" />
      <NotebookCard color="red" />
      <NotebookCard color="green" />
      <NotebookCard color="light-blue" />
      <NotebookCard color="light-red" />
      <NotebookCard color="light-green" />
    </div>
  );
}

export default App;
