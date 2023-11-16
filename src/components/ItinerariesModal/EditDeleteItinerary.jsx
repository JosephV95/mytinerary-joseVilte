import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import "./EditDeleteItinerary.css"
import Swal from "sweetalert2";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import itinerariesActions from "../../store/actions/itinerariesAction";

export default function EditDeleteItinerary({efectoEnProp, idEnProp, nameItiProp}) {

  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false), setEdit({})}; //? Se settea vacia la data por si se vuelve a editar la misma city
  const handleShow = () => setShow(true);

  const [formEdited, setFormEdited] = useState(false); //* Estado que mostrara si hubo cambios en los inputs
  const dispatch = useDispatch();

  const [edit, setEdit] = useState({});

  const nameIti = useRef();
  const imageIti = useRef();
  const priceIti = useRef();
  const durationIti = useRef();
  const descriptionIti = useRef();

  const handleSubmitEdit=()=>{

  }

  const handleDelete = (_id)=>{
    Swal.fire({
      title: "Delete " +nameItiProp+ "?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then( (result) => {
      if (result.isConfirmed) {
        dispatch(itinerariesActions.delete_itinerary({id: _id}));
        efectoEnProp();
      }
    });
  }
  return (
    <div className="col-9 col-md-1 ps-1 pe-0">
      <div className="w-100 d-flex justify-content-center flex-md-column " >
        <Button variant="outline-warning" className="mb-2 buttonIti fw-bold border-2 text-xl-start"
        onClick={handleShow}
        ><i className="fa-solid fa-pen-to-square"></i> Edit</Button>
        <Button variant="outline-danger" className="mb-2 buttonIti delete fw-bold border-2 text-xl-start"
        onClick={()=>{handleDelete(idEnProp) }} //! Se usa funcion anonima para evitar eliminar todos los Itinerarios al renderizar la página
        ><i className="fa-solid fa-delete-left"></i> Delete</Button>


        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Itinerary</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmitEdit}>
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
    </div>
  )
}
