import { useState } from "react";
import { Button } from "react-bootstrap";
import { ReviewForm } from "./ReviewForm";

export const Review = ({ review, handleDelete, handleSubmit }) => {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div className="Review">
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div className="comment-section">
          <ul>
            <h5>{review.reviewer}</h5>
            <li>{review.content}</li>
          </ul>
          <Button variant="warning" onClick={toggleView}>
            {!viewEditForm ? "Edit" : "See Review"}
          </Button>{" "}
          <Button variant="danger" onClick={() => handleDelete(review.id)}>
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};
