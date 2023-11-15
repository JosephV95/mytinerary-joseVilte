import { useRef, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import itinerariesActions from "../../store/actions/itinerariesAction";

export default function AddItinerary() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const {id} = useParams()

  const nameIti = useRef();
  const imageIti = useRef();
  const priceIti = useRef();
  const durationIti = useRef();
  const descriptionIti = useRef();

  const handleSubmitAddItinerary = (event) =>{
    event.preventDefault();
    const dataAddItinerary = {
      name: nameIti.current.value,
      img: imageIti.current.value,
      desc: descriptionIti.current.value,
      price: priceIti.current.value,
      duration: durationIti.current.value,
      _cities: id  //!  Aqui se le pasa el id de la city al que pertenece el itinerario
    }
    console.log(dataAddItinerary);
    dispatch(itinerariesActions.create_itinerary({id:id, dataNewItinerary: dataAddItinerary}))
  }

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
            <Form onSubmit={handleSubmitAddItinerary}>
              <Form.Group className="mb-3">
                <Form.Label>Itinerary name:</Form.Label>
                <Form.Control
                  autoFocus type="text" placeholder="E.g., Guided tour of Shibuya city" required ref={nameIti}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="input2">
                <Form.Label>Itinerary image url:</Form.Label>
                <Form.Control
                  type="url" placeholder="Enter a valid url" required ref={imageIti}
                />
              </Form.Group>

              <Row>
                <Form.Group className="mb-3" as={Col} sm="4">
                  <Form.Label>Price:</Form.Label>
                  <Form.Control
                    type="number" required min={0} step={0.01} placeholder="$ 0" ref={priceIti}
                  />
                </Form.Group>
                <Form.Group className="mb-3" as={Col} sm="8">
                  <Form.Label>Duration:</Form.Label>
                  <Form.Control
                    type="text" placeholder="E.g., 5 hours or Half a day" required ref={durationIti}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  as="textarea" rows={3} placeholder="Enter a description about the itinerary" required
                  ref={descriptionIti}
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
