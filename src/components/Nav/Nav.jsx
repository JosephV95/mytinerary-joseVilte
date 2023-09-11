import { Button, Form, Modal } from "react-bootstrap";
import NavRouterLink from "./NavRouterLink";
import { useState } from "react";

export default function Nav() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
<>

    <nav>
      <ul className="nav d-flex justify-content-end align-items-center">
        <NavRouterLink title={"Home"} url={'/'}/>
        <NavRouterLink title={"Cities"} url={'/cities'}/>

        <button className="btn btn-primary ms-2 px-2" type="button"  onClick={handleShow}>
          <i className="fa-solid fa-user"></i> Sign Out
        </button>
      </ul>
    </nav>

    <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton >
        <Modal.Title>Iniciar Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email"  required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    pattern=".{6,12}"
                    id="inputPassword5"
                    aria-describedby="pass" placeholder="Password" required 
                  />
                  <Form.Text id="pass" muted>
                    The password must be 6-12 characters
                  </Form.Text>
                </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Body>
        <p>Si no tienes cuenta ragistrate</p>
        <Button variant="success" href="/user">
            Save Changes
          </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
        
      </Modal.Footer>
    </Modal>
    </>
  );
}
