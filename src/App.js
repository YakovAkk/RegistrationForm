import logo from "./logo.svg";
import * as React from "react";
import RegistrationForm from "./components/registration.form/registration.form.jsx";
import "./App.css";
import UsersList from "./components/users.list/users.list";

function App() {
  localStorage.setItem("key", "7i2nC4TUZNHQinn7Rs44_VcXIQkYVmla5zQgzYxlH90");

  return (
    <div className="App">
      <RegistrationForm></RegistrationForm>
      <UsersList></UsersList>
    </div>
  );
}

export default App;
