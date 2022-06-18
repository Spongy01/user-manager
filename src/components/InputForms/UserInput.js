import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import "./UserInput.css";

const UserInput = (props) => {
  const [username, setUsername] = useState("");
  const [userage, setUserage] = useState("");
  const [error, setError] = useState();

  const onUserNameChange = (event) => {
    setUsername(event.target.value);
  };
  const onUserAgeChange = (event) => {
    setUserage(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || userage.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+userage < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(`${username} (${userage} years old)`);
    setUserage("");
    setUsername("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div>
        <form onSubmit={formSubmitHandler}>
          <div className="form-control">
            <label>Username</label>
            <input type="text" value={username} onChange={onUserNameChange} />
          </div>
          <div className="form-control">
            <label>Age(Years)</label>
            <input type="number" value={userage} onChange={onUserAgeChange} />
          </div>
          <div className="submitButton">
            <button type="submit">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInput;
