import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function ProfileUser() {
  const userInStore = useSelector(store => store.userReducer.user);
  const [userStore, setUserStore] = useState(userInStore);

  console.log(userInStore);
  
  useEffect(()=>{
    setUserStore(userInStore)
    console.log(userInStore);
    // console.log(userName.current);
  },[userInStore])
  // const userLastname = useRef(userInStore.lastname)
  // const userPhoto = useRef(userInStore.photo)
  // const userPassword = useRef(userInStore.password)

  return (
    <section>
      <Container>
        <Row >
          <Col md={{ span: 6, offset: 3 }}>
            <Form  className="p-4 rounded" >
              <h3 className="text-center mb-4"><i className="fa-solid fa-user-plus" style={{color:"#0bab6d"}}></i> Update Data</h3>
              <fieldset>
                <Form.Group>
                      <Form.Label htmlFor="inputPassword5">Name:</Form.Label>
                      <Form.Control
                        type="text"
                        pattern=".{6,12}"
                        id="inputPassword5"
                        aria-describedby="pass" required  value={userStore.name}
                      />
                  {/* <Col md={3}>
                    <p>Lastname: </p>
                  </Col>
                  <Col md={8}>
                    <input type="text" name="" value={userStore.lastname}/>
                  </Col> */}
                </Form.Group>
                <Form.Group>
                      <Form.Label htmlFor="inputLastname">Lastname:</Form.Label>
                      <Form.Control
                        type="text"
                        pattern=".{6,12}"
                        id="inputLastname"
                        aria-describedby="textLastName" required  value={userStore.lastname}
                      />
                </Form.Group>

                <Form.Group className="mb-3">
                      <Form.Label htmlFor="photoUrl">User photo: </Form.Label>
                      <Form.Control type="url" id="photoUrl" placeholder="Image url" required  value={userStore.photo} />
                </Form.Group>
              </fieldset>
            </Form>
          </Col> 

          
        </Row>
      </Container>
    </section>
  );
}
