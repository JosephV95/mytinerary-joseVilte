import { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userActions from "../../store/actions/authActions";

export default function UserRegister() {

  const userNameRef = useRef();
  const userLastnameRef = useRef();
  const userEmailRef = useRef();
  const userPasswordRef = useRef();
  const userPhotoRef = useRef();
  const userNationRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogged = useSelector(store => store.userReducer.isLogged)

  const userCreatedStore = useSelector(store => store.userReducer.userCreated)
    
  const [validated, setValidated] = useState(false);

  if (userLogged) {
    return navigate("/")
  }
  if (userCreatedStore.email.length > 0) {
    navigate("/user/login")
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    dispatch(userActions.user_register( {
      name: userNameRef.current.value,
      lastname: userLastnameRef.current.value,
      email: userEmailRef.current.value,
      password: userPasswordRef.current.value,
      photo: userPhotoRef.current.value,
      nation: userNationRef.current.value
    }))
  }

  return (
    <section  style={{minHeight:"100vh"}}>
      <div className="container pt-3">
        <div className="row  align-items-center">
          <div className="col-md-5" style={{margin: "auto", textAlign: "center", color: "whitesmoke"}}>
            <h1 style={{fontSize: "2.2rem"}} className="mb-3">Mytinerary</h1>
            <p style={{fontSize: "1.5rem"}}>Welcome new user.</p>
          </div>
          <div className="col-md-7">
            <Form className="  p-4 rounded"   validated={validated} onSubmit={handleSubmit}  style={{backgroundColor: "white"}}>
              <h3 className="text-center mb-4"><i className="fa-solid fa-user-plus" style={{color:"#0bab6d"}}></i> Register</h3>
              <fieldset>
                <Row>
                  <Form.Group className="mb-3" as={Col} md="6">
                    {/* <Form.Label htmlFor="firstName">
                      Disabled input
                    </Form.Label> */}
                    <Form.Control
                      id="firstName"
                      type="text"
                      placeholder="First name" required 
                      ref={userNameRef}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" as={Col} md="6">
                    {/* <Form.Label htmlFor="lastName">
                      Disabled input
                    </Form.Label> */}
                    <Form.Control
                      id="lastName"
                      type="text"
                      placeholder="Last name" required 
                      ref={userLastnameRef}
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address:</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" aria-describedby=""  required pattern=".+com" ref={userEmailRef}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="inputPassword5">Password:</Form.Label>
                  <Form.Control
                    type="password"
                    // minLength={6}
                    // maxLength={12}
                    pattern=".{6,12}"
                    // title="alfanumerico y sin simbolo"
                    id="inputPassword5"
                    aria-describedby="pass" placeholder="Password" required ref={userPasswordRef}
                  />
                  <Form.Text id="pass" muted>
                    The password must be 6-12 characters
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="photoUrl">
                    User photo:
                  </Form.Label>
                  <Form.Control type="url" id="photoUrl" placeholder="Image url" required  ref={userPhotoRef}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="selectCountry">
                    Select country
                  </Form.Label>
                  <Form.Select id="selectCountry" required placeholder="Hola" ref={userNationRef}>
                    <option value="other" defaultValue="other" disabled >Select </option>
                    <option value="Japan">Japan</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Alemania">Alemania</option>
                  </Form.Select>
                </Form.Group>
                

                <Button type="submit" className="mt-2 btn btn-success">Register</Button>
              </fieldset>
              <div>
                <a href="">Registrarse con Google</a>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
