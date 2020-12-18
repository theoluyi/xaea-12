import React from "react";
import "./index.css";
import Form from "../Form/Form"

const NotebookCard = (props) => {
  return <div id={props.color}>{props.children}</div>;
};

function Grid() {
  return (
    <div className="full-page">
      <NotebookCard color="dark-blue" > X </NotebookCard>
      <NotebookCard color="dark-red" > I am an arbitrary child prop in the dark-red notebook</NotebookCard>
      <NotebookCard color="dark-green" />
      <NotebookCard color="blue" />
      <NotebookCard color="red" />
      <NotebookCard color="green" />
      <NotebookCard color="light-blue" ><Form/></NotebookCard>
      <NotebookCard color="light-red" > <Form/></NotebookCard>
      <NotebookCard color="light-green" ><Form/></NotebookCard>
    </div>
  );
}

export default Grid;
