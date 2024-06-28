import React, { useContext } from 'react'
import { UserData } from './ContectApi';


const User = () => {

    const userDetails = useContext(UserData);

    console.log(userDetails,"userDetails");

  return (
    <div>
        
        <h1>User Data </h1>

        <p>{userDetails.name}</p>
        <p>{userDetails.email}</p>
        <p>{userDetails.mobile}</p>
    </div>
  )
}

export default User