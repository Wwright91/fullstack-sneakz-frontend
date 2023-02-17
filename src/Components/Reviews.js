import axios from "axios";
import { useState, useEffect } from "react";
import { Badge, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Review } from "./Review";
import { ReviewForm } from "./ReviewForm";

const API = process.env.REACT_APP_API_URL;

export const Reviews = () => {
    // const [data, setData] = useState([])
    const [reviews, setReviews] = useState([]);
    const [showForm, setShowForm] = useState(false)
    const [showReviews, setShowReviews] = useState(false)
  let { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/sneakz/${id}/reviews`).then((response) => {
      console.log(response.data);
        setReviews(response.data)
    });
  }, [id]);

  const handleAdd = (newReview) => {
    axios
      .post(`${API}/sneakz/${id}/reviews`, newReview)
      .then(
        (response) => {
          setReviews([response.data, ...reviews]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };
    
  const handleDelete = (id) => {
    axios
      .delete(`${API}/sneakz/${id}/reviews/${id}`)
      .then(
        (response) => {
          const copyReviewArray = [...reviews];
          const indexDeletedReview = copyReviewArray.findIndex((review) => {
            return review.id === id;
          });
          copyReviewArray.splice(indexDeletedReview, 1);
          setReviews(copyReviewArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };
    
  const handleEdit = (updatedReview) => {
    axios
      .put(`${API}/sneakz/${id}/reviews/${updatedReview.id}`, updatedReview)
      .then((response) => {
        const copyReviewArray = [...reviews];
        const indexUpdatedReview = copyReviewArray.findIndex((review) => {
          return review.id === updatedReview.id;
        });
        copyReviewArray[indexUpdatedReview] = response.data;
        setReviews(copyReviewArray);
      })
      .catch((c) => console.warn("catch", c));
  };

  return (
    <section className="reviews-section">
          <Button variant="dark" onClick={() => setShowReviews(!showReviews)}>Reviews <Badge bg={reviews.length ? "secondary" : "danger"}>{reviews.length}</Badge></Button>

          <br />
          <br />
          
          {showReviews && <>
              {
              reviews.map(( review ) => (
                   < Review key={review.id} review={review} handleDelete={handleDelete} handleSubmit={handleEdit} /> 
              ))
          }
          <br />
         <h3><Button onClick={() => setShowForm(!showForm)} variant="danger">{!showForm ? "Add A New Review" : "Hide Form"}</Button></h3>
          </>
          
          }
          
      {showForm && <ReviewForm handleSubmit={handleAdd}>
      </ReviewForm>}
           {/* <h2>Reviews</h2>
      <ReviewForm handleSubmit={handleAdd}>
        <h3>Add a New Review</h3>
      </ReviewForm>
      {reviews.map((review) => (
          <Review key={review.id} review={review} handleDelete={handleDelete } handleSubmit={handleEdit} />
      ))} */}
    </section>
  );
}
