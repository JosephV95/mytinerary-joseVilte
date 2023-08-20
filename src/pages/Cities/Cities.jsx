import { useEffect, useState } from "react";
import "../Cities/cities.css";
import { Col, Image, Row } from "react-bootstrap";

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
            <Col xs={6} md={3} key={key} className="position-relative  text-center text-white d-flex my-1">
              
              <Image
                src={city.img}
                rounded
                style={{  minHeight: "11rem" }}
                className="w-100   object-fit-cover  "
              />
              <div className="textCity position-absolute top-0 w-100">
                <p >{city.city}</p>
                <p >{city.nation}</p>
              </div>
              <button className="btn btn-primary  position-absolute bottom-0  py-1 px-2 my-1 mx-2" type="button">More Details</button>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
