import { Col, Container, Row } from "react-bootstrap";

export default function ProfileUser() {
  return (
   <Container>
    <Row md={2}>
      <Col>
      <p>Me dicen antorcha</p>
      </Col>

      <Col md={{span:3,offset: 2}}>
        <p>Hola mamu Raikou</p>
      </Col>
    </Row>
   </Container>
  )
}
