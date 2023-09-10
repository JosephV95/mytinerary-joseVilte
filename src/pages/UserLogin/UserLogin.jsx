import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function UserLogin() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <section  style={{minHeight:"100vh"}}>
      <div className="container py-5">
        <div className="row  align-items-center">
          <div className="col-md-5" style={{margin: "auto", textAlign: "center", color: "whitesmoke"}}>
            <h1>Mytinerary</h1>
            <p>Welcome nuevo usuario</p>
          </div>
          <div className="col-md-7">
            <Form className="bg-white  p-4 rounded"   validated={validated} onSubmit={handleSubmit}>
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
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" aria-describedby=""  required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                  <Form.Control
                    type="password"
                    // minLength={6}
                    // maxLength={12}
                    pattern=".{6,12}"
                    id="inputPassword5"
                    aria-describedby="pass" placeholder="Password" required 
                  />
                  <Form.Text id="pass" muted>
                    The password must be 6-12 characters
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="photoUrl">
                    User photo
                  </Form.Label>
                  <Form.Control type="url" id="photoUrl" placeholder="Image url" required/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="selectCountry">
                    Select country
                  </Form.Label>
                  <Form.Select id="selectCountry" required placeholder="Hola">
                    <option selected disabled >Select </option>
                    <option value="1">Japan</option>
                    <option value="2">Argentina</option>
                    <option value="3">Alemania</option>
                  </Form.Select>
                </Form.Group>
                

                <Button type="submit" className="mt-2 btn btn-success">Submit</Button>
              </fieldset>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
