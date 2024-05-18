import { useState } from "react";
import UserDetails from "./UserDetails";

const Initalvalue = {
  itemname: "",
  price: "",
};

function UserData() {
  const [items, setItems] = useState(Initalvalue);
  const [userList, setUserList] = useState([]);

  function Submit() {
    if (items.itemname !== "" && items.price !== "") {
      setUserList([...userList, items]);
      setItems(Initalvalue);
    } else {
      alert("Enter Any Items");
    }
  }

  function Clear() {
    setUserList([]);
  }

  return (
    <>
      <div className="user_data">
        <h1>Welcome To DMart</h1>
        <div>
          <p>Items</p>
          <input
            type="text"
            name=""
            id=""
            value={items.itemname}
            className="input"
            onChange={(event) =>
              setItems({ ...items, itemname: event.target.value })
            }
            placeholder="Enter Items"
          />
        </div>
        <div>
          <p>Price</p>
          <input
            type="number"
            name=""
            id=""
            value={items.price}
            className="input"
            onChange={(e) => setItems({ ...items, price: e.target.value })}
            placeholder="Enter Price"
          />
        </div>
        <button className="btn" onClick={() => Submit()}>
          Add Items
        </button>
        <button className="btn" onClick={() => Clear()}>
          Clear All
        </button>

        <UserDetails ItemsList={userList} />
      </div>
    </>
  );
}
export default UserData;
