import React from "react";
import "./user.css";

const User = (props) => {
  return (
    <div className="storage-user">
      <p>
        {props.person.sex === "Male" ? "His" : "Her"} full name is{" "}
        {props.person.name} {props.person.surname}
      </p>
      <p>Phone number: {props.person.phonenumber}</p>
      <p>Email: {props.person.email}</p>
      <p>Address {props.person.address}</p>
    </div>
  );
};

export default User;
