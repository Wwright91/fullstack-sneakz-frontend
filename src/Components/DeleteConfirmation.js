import React from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

export default function ConfirmDelete({
  id,
  navigate,
  show,
  handleClose,
  handleShow,
}) {
  const handleDelete = () => {
    axios
      .delete(`${API}/sneakz/${id}`)
      .then(() => {
        navigate(`/sneakz`);
        // window.location.reload()
      })
      .catch((e) => console.error(e));
  };

  return (
    <>
      <Button
        variant="white"
        onClick={handleShow}
        type=" button"
        className="btn btn-danger"
      >
        Delete
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Sneaker</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this sneaker?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
