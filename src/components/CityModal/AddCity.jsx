import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function AddCity() {
  const userLogged = useSelector((store) => store.userReducer.isLogged);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="col-12 mb-1">
        <Button
          variant="outline-info border-2  fw-bold" className="viewCity"
          onClick={handleShow}
          hidden={userLogged == false}
        >
          <i className="fa-solid fa-plus"></i> Add new city
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New City</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>City name:</Form.Label>
                <Form.Control type="text" placeholder="Ej: Shibuya" autoFocus />
              </Form.Group>
              <Form.Group className="mb-3" controlId="input2">
                <Form.Label>Country name:</Form.Label>
                <Form.Control type="text" placeholder="Ej: Japan" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="input2">
                <Form.Label>City image url:</Form.Label>
                <Form.Control type="text" placeholder="Enter a valid url" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter a description about the city"/>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save City
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
