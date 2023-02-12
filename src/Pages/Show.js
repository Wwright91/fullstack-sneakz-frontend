import React from 'react'
import { SneakerDetails } from '../Components/SneakerDetails'

export const Show = ({cartItems, setCartItems, itemAdded, setItemAdded}) => {
  return (
    <div><SneakerDetails cartItems={cartItems} setCartItems={setCartItems} itemAdded={itemAdded} setItemAdded={setItemAdded} /></div>
  )
}
