import React from 'react'
import { Link } from 'react-router-dom';
import error_photo from "../assets/404-edit-sneaker.jpeg";

export const FourOFour = () => {
  return (
    <div className='text-center'>
      <h3>Oops!! Don't Let A Misstep Hold You Back</h3>
      <h5>Find A New Pair Of Sneakers <Link to="/sneakz" className='fourofour-link'>
      Now</Link></h5>
      <img src={error_photo} alt="sneaker with gum" height="500px" width="600px" />
    </div>
  )
}
