import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import userActions from "../../store/actions/authActions";

export default function ProfileUser() {
  const userInStore = useSelector(store => store.userReducer.user);
  const [userStore, setUserStore] = useState(userInStore);
  const [profilePhoto, setProfilePhoto] = useState("");
  const dispatch = useDispatch();
  const {id} = useParams();

  const upUserName = useRef();
  const upUserLastname = useRef();
  const upUserPhoto = useRef();
  
  useEffect(()=>{
    setUserStore(userInStore)
    setProfilePhoto(userInStore.photo)
  },[userInStore])

  const changePhoto = (e)=>{
    console.log(e.target.value);
    setProfilePhoto(e.target.value)
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
  }

  return (
    <section style={{minHeight:"83vh"}}>
      <Container>
        <Row  className="justify-content-center">
          <Col md={{ span: 7 }}>
            <Form  className="p-4 rounded-5 text-white position-relative" onSubmit={handleSubmit}  style={{backgroundColor:"rgb(21, 123, 141)"}}>
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
                      <Form.Label htmlFor="inputPassword5">Name:</Form.Label>
                      <Form.Control
                        type="text"
                        id="inputPassword5"
                        aria-describedby="pass" defaultValue={userInStore.name} ref={upUserName}  />
                  </Form.Group>
                  <Form.Group className="mb-3" as={Col} md="6">
                        <Form.Label htmlFor="inputLastname">Lastname:</Form.Label>
                        <Form.Control
                          type="text"
                          id="inputLastname"
                          aria-describedby="textLastName"  defaultValue={userStore.lastname} ref={upUserLastname}  />
                  </Form.Group> 
                </Row>

                <Form.Group className="mb-3">
                      <Form.Label htmlFor="photoUrl">User photo: </Form.Label>
                      <Form.Control type="url" id="photoUrl" placeholder="Image url"  
                      defaultValue={userStore.photo} onChange={changePhoto} ref={upUserPhoto}/>
                </Form.Group>

                <div className="d-flex justify-content-center mt-4">
                  <Button type="submit" variant="primary" > <i className="fa-solid fa-floppy-disk" style={{fontSize:"1.28rem"}}></i> Update</Button>
                </div>
              </fieldset>
            </Form>
          </Col> 
        </Row>
      </Container>
    </section>
  );
}
