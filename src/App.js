import React, { useState } from "react";
import "./App.css";
import UserInput from "./components/InputForms/UserInput";
import UserData from "./components/Users/UserData";

import "./App.css";

function App() {
  const [userdata, setUserData] = useState([]);

  const AddUser = (data) => {
    setUserData((prev) => [...prev, data]);
  };

  let content = (<p>No Users Entered</p>);

  if(userdata.length!==0){
    content = (<UserData userData={userdata} />);
  }
  
  return (
    <div className="container">
      <section className="inputBox">
        <UserInput onAddUser={AddUser} />
      </section>

      <section className="dataItems">
        {content}
      </section>
    </div>
  );
}

export default App;
