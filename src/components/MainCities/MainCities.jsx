import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function MainCities() {
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

  let [bgCities, setBgCities] = useState("../Kioto.jpg");

  return (
    <section
      className="pageCities"
      style={{ backgroundImage: `url(${bgCities})` }}
    >
      <div className="container">
        <div className="row justify-content-center text-center position-relative  ">
          <div className="col-12  py-4 text-white  heroCities">
            <h3>Cities</h3>
            <p>Collection of the most beatiful places and experience.</p>
          </div>

          <div className="col-12 py-3">
            <input
              className="rounded"
              type="search"
              name=""
              id=""
              placeholder="Search your City"
            />
          </div>
        </div>

        <Row className="justify-content-center  my-3">
          {data.map((city, key) => (
            <Col
              xs={6}
              md={3}
              key={key}
              className="position-relative  text-center text-white d-flex my-1"
            >
              <Card
                className="cardCity  bg-dark text-white  overflow-x-hidden"
                style={{ minHeight: "11rem" }}
                onMouseEnter={() => setBgCities(`${city.img}`)}
              >
                <Card.Img
                  src={city.img}
                  alt={city.name}
                  className="w-100 h-100  object-fit-cover  "
                />
                <Card.ImgOverlay className="d-flex">
                  <div className="bg-dark bg-opacity-75 position-absolute top-0 start-0 w-100 text-center ">
                    <Card.Title className="m-0 ">{city.nation}</Card.Title>
                    <Card.Text>🗺{city.city}</Card.Text>
                  </div>
                  <button
                    className="btn btn-primary  position-absolute bottom-0  py-1 px-2 mb-1 mx-1"
                    type="button"
                  >
                    More Details
                  </button>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
