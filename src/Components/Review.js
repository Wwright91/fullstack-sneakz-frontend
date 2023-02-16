import { useState } from "react";
import { ReviewForm } from "./ReviewForm";

export const Review = ({ review, handleDelete, handleSubmit}) => {

  // console.log(review)
    const [viewEditForm, toggleEditForm] = useState(false);
    
    const toggleView = () => {
        toggleEditForm(!viewEditForm)
    }

  return (
    <div className="Review">
      {viewEditForm ? (
              <ReviewForm reviewDetails={review} toggleView={ toggleView} handleSubmit={handleSubmit} />
      ) : (
          <div className="comment-section">
            
            <ul>
              <h5>{review.reviewer}</h5>
            <li>{review.content}</li>
            </ul>
            <button onClick={toggleView}>{!viewEditForm ? "Edit" : "See Review"}</button>
             {" "}
          <button onClick={() => handleDelete(review.id)}>Delete</button>
       </div >
      )}
    </div>
  );
}
