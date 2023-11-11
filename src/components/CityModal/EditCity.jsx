import { useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import citiesActions from "../../store/actions/citiesAction";

//! Se recibe una funcion como prop que avisa al componente padre que se Edito una city
export default function EditCity({activarEfecto, numId}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formEdited, setFormEdited] = useState(false); //* Estado que mostrara si hubo cambios en los inputs
    const dispatch = useDispatch();
    const cityRef = useRef();
    const countryRef = useRef();
    const imageUrlRef = useRef();
    const descriptionRef = useRef();

    // const cityInStore = useSelector((store)=> store.citiesReducer.city)
    const [cityEdit, setCityEdit]= useState({})

    const modalEdit = async()=>{
      handleShow();
        
      await dispatch(citiesActions.get_one_city(numId))
      .then((res)=>{
          // console.log(res.payload.oneCity)
          setCityEdit(res.payload.oneCity)
      })
    }

    const handleCityEdited = (event)=>{
      event.preventDefault()
      const dataCityEdited = {
        
        city: cityRef.current.value,
        nation: countryRef.current.value,
        img: imageUrlRef.current.value,
        description: descriptionRef.current.value
      }
      // console.log(dataCityEdited);

      dispatch(citiesActions.update_city({id: numId, dataCityEdited: dataCityEdited}))
      activarEfecto();
      handleClose()
    }

  return (
    <>
      <Button variant="outline-warning" className="buttonCities py-1"  onClick={modalEdit} >
        <i className="fa-solid fa-pen-to-square"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit City</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleCityEdited} >
              <Form.Group className="mb-3" >
                <Form.Label>City name:</Form.Label>
                <Form.Control  autoFocus  ref={cityRef} defaultValue={cityEdit.city} onChange={()=>{setFormEdited(true)}}
                      type="text" 
                      placeholder="Ej: Shibuya" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="input2">
                <Form.Label>Country name:</Form.Label>
                <Form.Control type="text" placeholder="Ej: Japan" ref={countryRef} defaultValue={cityEdit.nation} onChange={()=>{setFormEdited(true)}} required/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="input2">
                <Form.Label>City image url:</Form.Label>
                <Form.Control type="url" placeholder="Enter a valid url" ref={imageUrlRef} defaultValue={cityEdit.img} onChange={()=>{setFormEdited(true)}} required/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter a description about the city" 
                ref={descriptionRef} defaultValue={cityEdit.description} onChange={()=>{setFormEdited(true)}}  required/>
              </Form.Group>

              <Modal.Footer className=" pb-0 pt-2">
                <Button variant="danger" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" disabled={!formEdited} >Edit City</Button>
              </Modal.Footer>

            </Form>
          </Modal.Body>
        </Modal>

    </>
  )
}
