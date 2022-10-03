import { useSelector } from "react-redux";
import User from "../user/user.jsx";
import "./users.list.css";

const UsersList = () => {
  const users = useSelector((state) => state.userResucer.users);

  return (
    <div>
      {users.length == 0 ? (
        <p className="nousers">there is no registered users</p>
      ) : (
        users.map((user) => <User person={user}></User>)
      )}
    </div>
  );
};

export default UsersList;
