import React, { useState } from "react";
import "./index.css";

// INSTRUCTIONS:
// Create a "todo" app with the following criteria:
//   1. The user can add new todo items - todos are just an array of objects with a text and id property
//   2. The app displays all of the todo items
//   BONUS: The user can remove todo items

export default function Things() {
  const [newThingText, setNewThingText] = useState("");
  const [thingsList, setThingsList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewThing(newThingText);
    setNewThingText("");
    // console.log(e.target.value);
  };

  const handleChange = (e) => {
    setNewThingText(e.target.value);
    // newThingText = e.target.value;
    // [e.target.name] = e.target.value;
  };

  const addNewThing = (newThingText) => {
    let newThingObject = {
      id: Math.floor(Math.random() * 1000),
      text: newThingText,
    };

    setThingsList([...thingsList, newThingObject]);
  };

  const mapThingsListToJSX = () => {
    let allTheThings = thingsList.map((thingPojo) => (
      <li key={thingPojo.id}>{thingPojo.text}</li>
    ));
    return allTheThings;
  };

  const allTheThings = mapThingsListToJSX();

  return (
    <div className="things">
      <h1> Things </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="thing"
          onChange={handleChange}
          value={newThingText}
        />
        <button type="submit" name="submit">
          add a thing
        </button>
      </form>
      <ul className="my-things">{allTheThings}</ul>
    </div>
  );
}
