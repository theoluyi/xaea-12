import React from "react";
import "./index.css";
import Form from "../Form/Form"
import Things from "../Things/Things"
import Timer from "../Timer/Timer"
import Counter from '../Counter'

const NotebookCard = (props) => {
  return <div id={props.color}>{props.children}</div>;
};

function Grid() {
  return (
    <div className="full-page">
      <NotebookCard color="dark-blue" > X </NotebookCard>
      <NotebookCard color="dark-red" > I am an arbitrary child prop in the dark-red notebook</NotebookCard>
      <NotebookCard color="dark-green" > <Things/> </NotebookCard>
      <NotebookCard color="blue" > <Timer/></NotebookCard>
      <NotebookCard color="red" > <Counter/></NotebookCard>
      <NotebookCard color="green" > </NotebookCard>
      <NotebookCard color="light-blue" ><Form/></NotebookCard>
      <NotebookCard color="light-red" > <Form/></NotebookCard>
      <NotebookCard color="light-green" ><Form/></NotebookCard>
    </div>
  );
}

export default Grid;
