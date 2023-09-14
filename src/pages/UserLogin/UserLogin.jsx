// import axios from "axios";
import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userLogged = useSelector(store => store.userReducer.isLogged)

    const userEmailRef = useRef();
    const userPasswordRef = useRef();

    const [validated, setValidated] = useState(false);

    if (userLogged) {
      return navigate("/")
    }

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

  return (
    <section  style={{minHeight:"100vh"}}>
      <div className="container pt-5">
        <div className="row justify-content-center  align-items-center">
          <div className="col-md-5" style={{margin: "auto", textAlign: "center", color: "whitesmoke"}}>
            <h1 style={{fontSize: "2.2rem"}} className="mb-3">Mytinerary</h1>
            <p style={{fontSize: "1.5rem"}}>Welcome back.</p>
          </div>
          <div className="col-md-7 rounded"  style={{backgroundColor: "white"}}>
            <Form className="  p-4 rounded"   validated={validated} onSubmit={handleSubmit}  >
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
                
                <Button type="submit" className="mt-2 btn btn-primary">Sign In</Button> or <Button  className="mt-2 btn btn-secondary">ingresar con google</Button>
              </fieldset>
              
            </Form>
            <div className="w-100 mb-4 mt-3 pt-0 d-flex justify-content-center align-items-center">
              You do not have an account? 
              <Button type="button" className=" btn btn-success ms-2"  onClick={()=>{navigate("/user/register")}}>Sign up</Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
