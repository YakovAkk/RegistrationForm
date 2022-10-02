import logo from "./logo.svg";
import * as React from "react";
import RegistrationForm from "./components/registration.form/registration.form.jsx";
import "./App.css";
import UsersList from "./components/users.list/users.list";

function App() {
  return (
    <div className="App">
      <RegistrationForm></RegistrationForm>
      <UsersList></UsersList>
    </div>
  );
}

export default App;
