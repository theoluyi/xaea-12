import React, { useState } from "react";
import "./index.css";

// https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
// mehhhhhhhh
function Form() {
  const [state, setState] = useState({
    name: "",
    gender: "no-answer",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("state is: ", state);
  };

  return (
    <div className="form">
      <h2>Tell us about yourself</h2>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" />
        <br />

        {/* for radio input, id identifies, name groups, value provides value */}
        <input
          type="radio"
          id="no-answer"
          name="gender"
          value="no-answer"
          defaultChecked
        />
        <label htmlFor="no-answer">Prefer not to answer</label>
        <br />
        <input type="radio" id="non-binary" name="gender" value="non-binary" />
        <label htmlFor="non-binary">Non-binary</label>
        <br />
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label>
        <br />
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label>
        <br />
        <input type="submit" name="submit" value="SUBMIT" />
      </form>
    </div>
  );
}

export default Form;
