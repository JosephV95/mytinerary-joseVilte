import { useEffect, useState } from "react";
import "../Cities/cities.css";
import { Card, Col, Row } from "react-bootstrap";

export default function Cities() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("src/utils/dataCities.json")
      .then((response) => response.json())
      .then(
        // info => console.log(info);
        (info) => setData(info)
      )
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <section className="cities">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12  py-5">
            <h3>Cities</h3>
            <p>Collection of the most beatiful places and experience.</p>
          </div>

          <div className="col-12 py-3">
            <input type="search" name="" id="" placeholder="Search your City" />
          </div>
        </div>

        <Row className="justify-content-center  my-3">
          {data.map((city, key) => (
            <Col
              xs={6}
              md={3}
              key={key}
              className="position-relative  text-center text-white d-flex my-1">

              <Card className="bg-dark text-white"  style={{  minHeight: "11rem" }}>
                <Card.Img src={city.img} alt="Card image" className="w-100 h-100  object-fit-cover  "/>
                <Card.ImgOverlay className="d-flex">
                  <div  className="bg-dark bg-opacity-75 position-absolute top-0 start-0 w-100 text-center ">
                    <Card.Title className="m-0 ">{city.nation}</Card.Title>
                    <Card.Text >
                      {city.city}
                    </Card.Text>
                  </div>
                  <button className="btn btn-primary  position-absolute bottom-0  py-1 px-1 my-1 mx-1" type="button">More Details</button>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
