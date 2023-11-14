import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

export default function AddItinerary() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <div className="col-12 mb-1 text-center">
        <Button
          variant="outline-light border-2  fw-bold"
          className="buttonCities mt-2" onClick={handleShow} >
          <i className="fa-solid fa-plus"></i> Add Itinerary
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Itinerary</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => {e.preventDefault(); console.log('hpña');}}>
              <Form.Group className="mb-3">
                <Form.Label>Itinerary name:</Form.Label>
                <Form.Control
                  autoFocus type="text" placeholder="E.g., Guided tour of Shibuya city" required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="input2">
                <Form.Label>Itinerary image url:</Form.Label>
                <Form.Control
                  type="url" placeholder="Enter a valid url" required
                  onChange={() => {
                    // setFormEdited(true);
                  }}
                />
              </Form.Group>

              <Row>
                <Form.Group className="mb-3" as={Col} sm="4">
                  <Form.Label>Price:</Form.Label>
                  <Form.Control
                    type="number"  required min={0} step={0.01} 
                    placeholder="$ 0"
                  />
                </Form.Group>
                <Form.Group className="mb-3" as={Col} sm="8">
                  <Form.Label>Duration:</Form.Label>
                  <Form.Control
                    type="text" placeholder="E.g., 5 hours or Half a day" required
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  as="textarea" rows={3} placeholder="Enter a description about the itinerary" required
                  // ref={descriptionRef}
                  onChange={() => {
                    // setFormEdited(true);
                  }}
                />
              </Form.Group>

              <Modal.Footer className=" pb-0 pt-2">
                <Button variant="danger" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary">
                  Save Itinerary
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
    </div>
  );
}
