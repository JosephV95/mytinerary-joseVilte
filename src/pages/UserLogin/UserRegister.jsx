import { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import userActions from "../../store/actions/authActions";

import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from "jwt-decode";
// import { getCountries } from "../../services/CountriesService";
import UserIsLogged from "../../services/UserLoggedVerify.js";
import { useNavigate } from "react-router-dom";

export default function UserRegister() {

  const userNameRef = useRef();
  const userLastnameRef = useRef();
  const userEmailRef = useRef();
  const userPasswordRef = useRef();
  const userPhotoRef = useRef();
  const userNationRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  const [validated, setValidated] = useState(false);
  const countryData = [
    {name: "Argentina"},
    {name: "Brazil"},
    {name: "Canadá"},
    {name: "Chile"},
    {name: "Denmark"},
    {name: "England"},
    {name: "France"},
    {name: "Germany"},
    {name: "Italy"},
    {name: "Japan"},
    {name: "Mexico"},
    {name: "Paraguay"},
    {name: "Peru"},
    {name: "Poland"},
    {name: "Portugal"},
    {name: "Qatar"},
    {name: "Spain"},
    {name: "Uruguay"},
    {name: "USA"},
    {name: "Other"}
  ];

  useEffect(()=>{
    // getCountries()
    //  .then(res => {
    //   // console.log(res)
    //   setcountryData(res)
    // })
  },[])

  //todo  Funcion importada de service que verificara si ya se esta logeado
  UserIsLogged();
  
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
    <section style={{minHeight:"95vh"}}>
      <div className="container pt-1">
        <div className="row  align-items-center">
          <div className="col-md-5" style={{margin: "auto", textAlign: "center", color: "whitesmoke"}}>
            <h1 style={{fontSize: "2rem"}} className="mb-3">MyTinerary</h1>
            <p style={{fontSize: "1.1rem"}}>Únete a nuestra comunidad y descubre ciudades increíbles y forma parte de sus divertidas actividades.</p>
          </div>
          <div className="col-md-7 col-lg-6 " 
          // data-aos="fade"
          >
            <Form className=" py-4 px-5 rounded-5 "   validated={validated} onSubmit={handleSubmit}  
              style={{backgroundColor: "white", boxShadow: "0 0 5px #3276ff, 0 0 15px #5096ff", border:"solid 2px #5096ff"}}>
              <h3 className="text-center mb-4"><i className="fa-solid fa-user-plus" style={{color:"#0bab6d"}}></i> Registrarse</h3>
              <fieldset>
                <Row>
                  <Form.Group className="mb-3" as={Col} md="6">
                    {/* <Form.Label htmlFor="firstName">
                      Disabled input
                    </Form.Label> */}
                    <Form.Control
                      id="firstName"
                      type="text"
                      placeholder="Nombre" required 
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
                      placeholder="Apellido" required 
                      ref={userLastnameRef}
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" placeholder="random@ejemplo.com" aria-describedby=""  required pattern=".+com" ref={userEmailRef}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="inputPassword5">Contraseña:</Form.Label>
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
                    La contraseña debe tener entre 6 y 12 caracteres
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="photoUrl">
                    Foto de Usuario (url de la imagen):
                  </Form.Label>
                  <Form.Control type="url" id="photoUrl" placeholder="Ingresar Url" required  ref={userPhotoRef}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="selectCountry">
                    Selecionar Nacionalidad
                  </Form.Label>
                  <Form.Select id="selectCountry" required  ref={userNationRef}>
                    {countryData.map((country, key)=>(
                      <option value={country.name}  key={key}>{country.name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
                
                <div className="d-flex flex-column align-items-center mt-3">
                  <Button type="submit" className="mt-2 px-5 btn btn-success">Registrarse</Button>
                  <p className="py-1 my-0">o</p>
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
            
              <div className="w-100 mt-1 pt-3 d-flex justify-content-center align-items-center">
                ¿Ya tienes una cuenta? 
                <Button type="button" className=" btn btn-primary ms-2"  onClick={()=>{navigate("/user/login")}}>Inicia sesión</Button>
              </div>

            </Form>
            
          </div>
        </div>
      </div>
    </section>
  );
}
