import { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userActions from "../../store/actions/authActions";

import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from "jwt-decode";
import { getCountries } from "../../services/CountriesService";

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

    
  const [validated, setValidated] = useState(false);
  const [countryData, setcountryData] = useState([]);
 
  useEffect(()=>{
    if (userLogged) {
      return navigate("/")
    }
  })  //! Sin el 2do parametro opcional ( ,[]) se lanzara el useEffect cada que se ingrese a la page, en este caso es conveniente

  useEffect(()=>{
    getCountries()
     .then(res => {
      // console.log(res)
      setcountryData(res)
    })
  },[])

 
  
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

  const signUpWithGoogle = (credentialResponse) =>{
    const dataUser = jwtDecode(credentialResponse.credential);
    // console.log(dataUser);
    const body = {
      name: dataUser.given_name,
      lastname: dataUser.family_name,
      email: dataUser.email,
      password: dataUser.sub.slice(0,12),
      photo: dataUser.picture
    }
    // console.log(body);
    dispatch(userActions.user_register(body))
  }

  return (
    <section  style={{minHeight:"100vh"}}>
      <div className="container pt-2">
        <div className="row  align-items-center">
          <div className="col-md-5" style={{margin: "auto", textAlign: "center", color: "whitesmoke"}}>
            <h1 style={{fontSize: "2.2rem"}} className="mb-3">Mytinerary</h1>
            <p style={{fontSize: "1.5rem"}}>Welcome new user.</p>
          </div>
          <div className="col-md-7">
            <Form className="  p-4 rounded"   validated={validated} onSubmit={handleSubmit}  style={{backgroundColor: "white"}}>
              <h3 className="text-center mb-4"><i className="fa-solid fa-user-plus" style={{color:"#0bab6d"}}></i> Sign Up</h3>
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
                    {countryData.map((country, key)=>(
                      <option value={country.name}  key={key}>{country.name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
                
                <div className="d-flex flex-column align-items-center mt-3">
                  <Button type="submit" className="mt-2 px-5 btn btn-success">Register</Button>
                  <p className="py-1 my-0">or</p>
                  <GoogleLogin
                    text="signup_with"
                    theme="filled_blue"
                    shape="pill"
                    
                    onSuccess={signUpWithGoogle}
                    // onSuccess={credentialResponse => {
                    //   console.log(credentialResponse);
                    //   console.log(jwtDecode(credentialResponse.credential));
                    // }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                </div>
              </fieldset>
              
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
