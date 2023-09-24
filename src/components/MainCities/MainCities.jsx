import { useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link as PageRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../../store/actions/citiesAction.js";

export default function MainCities() {
  
  let [bgCities, setBgCities] = useState("");
  const inputSearch = useRef(null);

  let citiesInStore = useSelector(store => store.citiesReducer.cities);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(citiesActions.get_cities())

    setBgCities(citiesInStore[0].img)
   
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
      style={{ backgroundImage: `url(${bgCities})` }}
    >
      <div className="container mb-5">
        <div className="row justify-content-center text-center position-relative  ">
          <div className="col-12  py-4 text-white  heroCities">
            <h3>Cities</h3>
            <p>Collection of the most beatiful places and experience.</p>
          </div>

            <form className="col-12 py-3 d-flex justify-content-center"  onSubmit={hadleSubmit}>
              <input
                className="rounded px-2 py-1"
                type="search"
                placeholder="Search your City"
                ref={inputSearch}
              />
              <button type="submit" className="btn btn-success ms-1" >Search</button>
            </form>
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
                    
                    <PageRouter to={city._id} style={{background:"#0d72cf", borderColor:"#f71b84", boxShadow:"inset 0 0 5px #f71b84"}} 
                    className="btn bDetails text-white position-absolute bottom-0 py-1 px-2 mb-2 ms-1 "> <i className="fa-solid fa-plane-departure"></i> Details</PageRouter>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))
          )  : (
            <Col  md={6}  className="py-5">
              <h1  className=" text-center text-white my-3 py-5">No Results</h1></Col>
          )}
        </Row>
      </div>
    </section>
  );
}
