import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import userActions from "../../store/actions/authActions";
import { UserNoLogged } from "../../services/UserLoggedVerify";

export default function ProfileUser() {
  const userInStore = useSelector(store => store.userReducer.user);
  const [userStore, setUserStore] = useState(userInStore);
  const [profilePhoto, setProfilePhoto] = useState("");
  const dispatch = useDispatch();
  const {id} = useParams();

  const upUserName = useRef();
  const upUserLastname = useRef();
  const upUserPhoto = useRef();

  const [formEdited, setFormEdited] = useState(false); //* Estado que mostrara si hubo cambios en los inputs
  
  // Se verifica si el usuario no esta loggeado, para redirigirlo al inicio
  UserNoLogged()

  useEffect(()=>{
    setUserStore(userInStore)
    setProfilePhoto(userInStore.photo)
  },[userInStore])

  const changePhoto = (e)=>{
    console.log(e.target.value);
    setProfilePhoto(e.target.value);
    setFormEdited(true)
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    
    //! Se debe crear esta variable con los datos dentro de la funcion, en caso de hacerlo fuera, lanzaria error,
    //! ya que al inicio(cuando entra a esta page) el .current.value estaria vacio y lanza error.
    const updateData = {
      name: upUserName.current.value,
      lastname: upUserLastname.current.value,
      photo: upUserPhoto.current.value
    }
    dispatch(userActions.user_update({id, updateData}));

    setFormEdited(false); //* desactivara el button submit
  }

  return (
    <section style={{minHeight:"83vh"}}>
      <Container>
        <Row  className="justify-content-center">
          <Col md={{ span: 7 }}>
            <Form  className="px-4 py-3 rounded-5 text-white position-relative" onSubmit={handleSubmit}  
            style={{backgroundColor:"rgb(21, 123, 141)", border:"5px solid rgb(10, 108, 128)", boxShadow: "10px 10px 15px #052a38" }}
            data-aos="flip-up" data-aos-duration="1500"  >
              <h3 className="text-center mb-3"><i className="fa-solid fa-pen-to-square" style={{color:"#2dfb6b"}}></i> Edit Profile</h3>
             
             <Row className="justify-content-center mb-4">
              <div className="border border-light border-2 rounded-circle" style={{width:"200px", height:"200px", 
                  backgroundImage:`url(${profilePhoto})`, backgroundPosition:"center", backgroundSize:"cover"}}>
              </div>
             </Row>
              <fieldset>
                <Row>
                  {/* //todo  Se utilizara defaultValue en vez de solo value, para no lanzar errores por consola  */}
                  <Form.Group className="mb-3" as={Col} md="6">
                      <Form.Label htmlFor="inputName">Name:</Form.Label>
                      <Form.Control
                        type="text"
                        id="inputName"
                        pattern="^(?!\s)[a-zA-Z0-9\s].{1,}$" required
                        title="Enter at least 2 characters without leading spaces"
                        aria-describedby="pass" defaultValue={userInStore.name} ref={upUserName} onChange={()=>{setFormEdited(true)}} />
                  </Form.Group>
                  <Form.Group className="mb-3" as={Col} md="6">
                        <Form.Label htmlFor="inputLastname">Lastname:</Form.Label>
                        <Form.Control
                          type="text"
                          id="inputLastname"
                          pattern="^(?!\s)[a-zA-Z0-9\s].{1,}$" required
                          title="Enter at least 2 characters without leading spaces"
                          aria-describedby="textLastName"  defaultValue={userStore.lastname} ref={upUserLastname} onChange={()=>{setFormEdited(true)}} />
                  </Form.Group> 
                </Row>

                <Form.Group className="mb-3">
                      <Form.Label htmlFor="photoUrl">User photo: </Form.Label>
                      <Form.Control type="url" id="photoUrl" placeholder="Image url"  
                      defaultValue={userStore.photo} onChange={changePhoto} ref={upUserPhoto}/>
                </Form.Group>

                <div className="d-flex justify-content-center mt-4 text-white">
                  <Button type="submit" variant="success" disabled={!formEdited} style={{backgroundColor:"#20b769"}}><i className="fa-solid fa-floppy-disk" style={{fontSize:"1.28rem"}}></i> Update</Button>
                </div>
              </fieldset>
            </Form>
          </Col> 
        </Row>
      </Container>
    </section>
  );
}
