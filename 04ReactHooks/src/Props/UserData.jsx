import { useState } from "react";
import UserDetails from "./UserDetails";

function UserData() {
  const [userValue, setUserValue] = useState("");
  const [userList, setUserList] = useState();
  function HandleChange(event) {
    setUserValue(event.target.value);
  }
  function Submit() {

  }
  return (
    <>
      <div className="user_data">
        <h1>User Data</h1>
        <input
          type="text"
          name=""
          id=""
          onChange={(event) => HandleChange(event)}
          placeholder="Enter Items"
        />
        <button onClick={() => Submit()}>Submit</button>

        <UserDetails formdata={userValue} val="Deepak"/>
      </div>
    </>
  );
}
export default UserData;
