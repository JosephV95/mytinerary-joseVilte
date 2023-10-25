import "../Cities/cities.css";

import { useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link as PageRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../../store/actions/citiesAction.js";
import AddCity from "../../components/CityModal/AddCity";

export default function Cities() {
  
  let [bgCities, setBgCities] = useState("");
  const inputSearch = useRef(null);

  let citiesInStore = useSelector(store => store.citiesReducer.cities);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(citiesActions.get_cities())

    // setBgCities(citiesInStore[0].img)
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hadleSubmit = (event) =>{
    event.preventDefault()
    // console.log( inputSearch.current.value);
    if (inputSearch.current.value){
      const queryParams = "?city=" + inputSearch.current.value;

      dispatch(citiesActions.get_cities(queryParams))
      
    } else {
      dispatch(citiesActions.get_cities())
    }
  }

  return (
    <section
      className="pageCities pt-5"
      style={{ backgroundImage: `url(${bgCities})`, minHeight:"90vh" }}
    >
      <div className="container mb-5">
        <div className="row justify-content-center text-center position-relative  ">
          <div className="col-12  py-3 text-white  heroCities">
            <h3>Cities</h3>
            <p>Collection of the most beatiful places and experience.</p>
          </div>

          <AddCity />
          
          <div>
            <form className="col-12 py-2 d-flex justify-content-center"  onSubmit={hadleSubmit}>
              <input
                className="rounded px-2 py-1"
                type="search"
                placeholder="Search your City"
                ref={inputSearch}
              />
              <button type="submit" className="btn btn-success ms-1" >Search</button>
            </form>
          </div>
        </div>

        <Row className="justify-content-center ">

          {citiesInStore.length > 0 ? (
            citiesInStore.map((city, key) => (
              <Col
                xs={6}
                md={3}
                key={key}
                className="position-relative  text-center text-white d-flex my-1 pt-4"
              >
                <Card
                  className="cardCity  bg-dark text-white w-100 overflow-x-hidden"
                  style={{ minHeight: "10rem", maxHeight: "12rem" }}
                  onMouseEnter={() => setBgCities(`${city.img}`)}  data-aos="zoom-in-up" data-aos-duration="960"
                >
                  <Card.Img
                    src={city.img}
                    alt={city.name}
                    className="w-100 h-100  object-fit-cover  "
                  />
                  <Card.ImgOverlay className="d-flex">
                    <div className="bg-dark bg-opacity-75 position-absolute top-0 start-0 w-100 text-center ">
                      <Card.Title className="m-0 ">{city.city}</Card.Title>
                      <Card.Text>🗺{city.nation}</Card.Text>
                    </div>
                    
                    <PageRouter to={city._id} 
                    className="viewCity btn btn-outline-light border-2  position-absolute bottom-0 py-1 ps-2 mb-2 ms-0 " onClick={()=>{window.scrollTo(0, 0)}}> 
                    <i className="fa-solid fa-mountain-sun"></i> View City</PageRouter>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))
          )  : (
            <Col  md={6}  className="py-5">
              <h1  className="text-center text-white my-3 py-5" style={{ fontSize:"4rem", WebkitTextStroke: "thin black"}}>No Results</h1></Col>
          )}
        </Row>
      </div>
    </section>
  );
}
