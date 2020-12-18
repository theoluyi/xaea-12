import React from "react";
import "./index.css";

const NotebookCard = (props) => {
  return <div id={props.color}>X</div>;
};

function Grid() {
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

export default Grid;
