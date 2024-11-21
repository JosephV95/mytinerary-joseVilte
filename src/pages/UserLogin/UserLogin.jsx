// import axios from "axios";
import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, } from "react-redux";
import userActions from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode"
import UserIsLogged from "../../services/UserLoggedVerify.js";

export default function UserLogin() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

    const userEmailRef = useRef();
    const userPasswordRef = useRef();

    const [validated, setValidated] = useState(false);

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

        dispatch(userActions.user_login({
          email: userEmailRef.current.value,
          password: userPasswordRef.current.value
        }))
    };

    const signInWithGoogle = (credentialResponse) =>{
      const dataUser = jwtDecode(credentialResponse.credential);
      // console.log(dataUser);
      const body = {
        email: dataUser.email,
        password: dataUser.sub.slice(0,12)
      }
      // console.log(body);
      dispatch(userActions.user_login(body))
    }

  return (
    <section  style={{minHeight:"95vh"}}> 
      <div className="container pt-4">
        <div className="row justify-content-center  align-items-center">
          <div className="col-md-5" style={{margin: "auto", textAlign: "center", color: "whitesmoke"}}>
            <h1 style={{fontSize: "2rem"}} className="mb-3">MyTinerary</h1>
            <p style={{fontSize: "1.1rem"}}>Welcome back. Discover new adventures in the most incredible cities in the world.</p>
          </div>
          <div className="col-md-7 col-lg-6 rounded-5"  style={{backgroundColor: "white", boxShadow: "0 0 7px #3276ff, 0 0 15px #05e4f0", border:"solid 2px #3276ff"}} 
            // data-aos="fade"
          >
            <Form className="py-4 px-5 rounded"   validated={validated} onSubmit={handleSubmit} >
              <h3 className="text-center mb-4"><i className="fa-solid fa-user-check" style={{color:"#0bab6d"}}></i> Sign In</h3>
              <fieldset>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address:</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" aria-describedby="" pattern=".+com"  ref={userEmailRef} required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="inputPassword5">Password:</Form.Label>
                  <Form.Control
                    type="password"
                    pattern=".{6,12}"
                    id="inputPassword5"
                    aria-describedby="pass" placeholder="Enter Password"  ref={userPasswordRef} required 
                  />
                  <Form.Text id="pass" muted>
                    The password must be 6-12 characters
                  </Form.Text>
                </Form.Group>
                <div className="d-flex flex-column align-items-center mt-4">
                
                  <Button type="submit" className="me-2 px-4 btn btn-primary">Sign In </Button> 
                  <p className="py-1 my-1">or</p>

                  <GoogleLogin
                  text="signin_with"
                  theme="filled_blue"
                  shape="pill"
                  
                  onSuccess={signInWithGoogle}
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
            <div className="w-100 mb-4 mt-3 pt-3 d-flex justify-content-center align-items-center">
              You do not have an account? 
              <Button type="button" className=" btn btn-success ms-2"  onClick={()=>{navigate("/user/register")}}>Sign up</Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
