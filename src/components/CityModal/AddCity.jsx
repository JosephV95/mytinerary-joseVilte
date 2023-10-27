import { useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../../store/actions/citiesAction";

//! Se recibe una funcion como prop que avisa al componente padre que se creo una city
export default function AddCity( {activarEfecto}) {  
  const userLogged = useSelector((store) => store.userReducer.isLogged);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [formEdited, setFormEdited] = useState(false); //* Estado que mostrara si hubo cambios en los inputs
  const dispatch = useDispatch();
  const cityRef = useRef();
  const countryRef = useRef();
  const imageUrlRef = useRef();
  const descriptionRef = useRef();

  const handleSubmitAddCity = (event)=>{
    event.preventDefault()
    const dataNewCity = {
        city: cityRef.current.value,
        nation: countryRef.current.value,
        img: imageUrlRef.current.value,
        description: descriptionRef.current.value
    }
       // console.log(dataNewCity);

    dispatch(citiesActions.create_city(dataNewCity))

    // setFormEdited(false)
    activarEfecto(); //! Aqui se ejecuta la funcion de Prop avisandole al componente padre
    handleClose();
  }
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
            <Form onSubmit={handleSubmitAddCity} >
              <Form.Group className="mb-3" >
                <Form.Label>City name:</Form.Label>
                <Form.Control  autoFocus ref={cityRef} onChange={()=>{setFormEdited(true)}}
                      type="text"
                      placeholder="Ej: Shibuya" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="input2">
                <Form.Label>Country name:</Form.Label>
                <Form.Control type="text" placeholder="Ej: Japan" ref={countryRef} onChange={()=>{setFormEdited(true)}} required/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="input2">
                <Form.Label>City image url:</Form.Label>
                <Form.Control type="url" placeholder="Enter a valid url" ref={imageUrlRef} onChange={()=>{setFormEdited(true)}} required/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter a description about the city" 
                ref={descriptionRef} onChange={()=>{setFormEdited(true)}}  required/>
              </Form.Group>

              <Modal.Footer className=" pb-0 pt-2">
                <Button variant="danger" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" disabled={!formEdited} >Save City</Button>
              </Modal.Footer>

            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
