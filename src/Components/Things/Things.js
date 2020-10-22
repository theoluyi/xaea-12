import React, { useState } from "react";
import "./index.css";

// INSTRUCTIONS:
// Create a "todo" app with the following criteria:
//   1. The user can add new todo items - todos are just an array of objects with a text and id property
//   2. The app displays all of the todo items
//   BONUS: The user can remove todo items

export default function Things() {
  const [thingText, setThingText] = useState("");
  return (
    <div className="things">
      <h1> Things </h1>
      <form onSubmit={() => console.log("form submitted")}>
        <input type="text" value={thingText}></input>
        <button type="submit" name="submit" value="submit"></button>
      </form>
    </div>
  );
}
