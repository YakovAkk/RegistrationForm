import User from "../user/user.jsx";

const UsersList = () => {
  const person = {
    name: "A",
    surname: "a",
    sex: "Male",
    email: "QQQ@gmail.com",
    address: "A",
  };

  const people = [person, person];

  return (
    <div>
      {people.map((person) => (
        <User person={person}></User>
      ))}
    </div>
  );
};

export default UsersList;
