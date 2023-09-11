// import axios from "axios";
import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import userActions from "../../store/actions/authActions";

export default function UserLogin() {

  const dispatch = useDispatch();

    const userEmailRef = useRef();
    const userPasswordRef = useRef();

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        // event.preventDefault();
        // event.stopPropagation();
        // } 

        dispatch(userActions.user_login({
          email: userEmailRef.current.value,
          password: userPasswordRef.current.value
        }))

      setValidated(true);
  };

  return (
    <section  style={{minHeight:"100vh"}}>
      <div className="container pt-3">
        <div className="row  align-items-center">
          <div className="col-md-5" style={{margin: "auto", textAlign: "center", color: "whitesmoke"}}>
            <h1>Mytinerary</h1>
            <p>Welcome nuevo usuario</p>
          </div>
          <div className="col-md-7">
            <Form className="  p-4 rounded"   validated={validated} onSubmit={handleSubmit}  style={{backgroundColor: "white"}}>
              <h3 className="text-center mb-4"><i className="fa-solid fa-user-plus" style={{color:"#0ec06d"}}></i> Login</h3>
              <fieldset>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address:</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" aria-describedby=""  ref={userEmailRef} required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="inputPassword5">Password:</Form.Label>
                  <Form.Control
                    type="password"
                    pattern=".{6,12}"
                    id="inputPassword5"
                    aria-describedby="pass" placeholder="Password"  ref={userPasswordRef} required 
                  />
                  <Form.Text id="pass" muted>
                    The password must be 6-12 characters
                  </Form.Text>
                </Form.Group>
                
                <Button type="submit" className="mt-2 btn btn-success">Login</Button>
              </fieldset>
              <div>
                <a href="">Ingresar con Google</a>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
