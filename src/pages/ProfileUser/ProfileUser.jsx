import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function ProfileUser() {
  const userInStore = useSelector(store => store.userReducer.user);
  const [userStore, setUserStore] = useState(userInStore);

  console.log(userInStore);
  
  useEffect(()=>{
    setUserStore(userInStore)
    console.log(userInStore);
    // console.log(userName.current);
  },[])
  // const userLastname = useRef(userInStore.lastname)
  // const userPhoto = useRef(userInStore.photo)
  // const userPassword = useRef(userInStore.password)

  return (
    <section>
      <Container>
        <Row >
            <Col md={3}>
              <p>Name: </p>
            </Col>
            <Col md={8}>
              <input type="text" name="" value={userStore.name} />
            </Col>
            <Col md={3}>
              <p>Lastname: </p>
            </Col>
            <Col md={8}>
              <input type="text" name="" value={userStore.lastname}/>
            </Col>
            <Col md={3}>
              <p>Photo: </p>
            </Col>
            <Col md={8}>
              <input type="text" name="" value={userStore.photo}/>
            </Col>

          <Col md={{ span: 3, offset: 2 }}>
            <p>Hola mamu Raikou</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
