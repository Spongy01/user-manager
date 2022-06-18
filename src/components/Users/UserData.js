import DataItem from "./DataItem";
import React from "react";
import "./UserData.css";

const UserData = (props) => {
  const users = props.userData;

  return (
    <div>
      <ul className="data-list">
        {React.Children.toArray(users.map((user) => <DataItem data={user} />))}
      </ul>
    </div>
  );
};

export default UserData;
