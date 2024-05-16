import React from 'react'

const UserDetails = ({formdata,val}) => {
  return (
    <div>
    <h1>UserDetails {formdata}</h1>
    <h1>Value {val}</h1>
    </div>
  )
}

export default UserDetails