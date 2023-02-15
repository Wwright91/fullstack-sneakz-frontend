import React from 'react'
import { Cart } from '../Components/Cart'

export const ShowCart = ({cartItems, setCartItems}) => {
  return (
    <div><Cart cartItems={cartItems} setCartItems={setCartItems}/></div>
  )
}
