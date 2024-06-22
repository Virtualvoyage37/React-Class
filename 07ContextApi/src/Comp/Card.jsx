import React, { useContext } from 'react'
import {CartData} from './Context'

const Card = () => {
const data = useContext(CartData)

  return (
    <div>
      
      <h3>Card {data.name}</h3>
      
          
      </div>
  )
}

export default Card