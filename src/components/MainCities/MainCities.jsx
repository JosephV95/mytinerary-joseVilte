import { useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { getAllCities } from "../../services/CitiesService.js"
import { Link as PageRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import citiesRed from "../../store/actions/citiesAction.js";

export default function MainCities() {
  
  let [bgCities, setBgCities] = useState("");
  const inputSearch = useRef(null);

  let citiesInStore = useSelector(store => store.citiesReducer.cities);
  // console.log(citiesInStore);
  let allCitiesInStore = useSelector(store => store.citiesReducer.allCities);
  // console.log( {CitiesBackup: allCitiesInStore});
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(CitiesService());
    getAllCities()
    .then(resp => {

      dispatch(citiesRed.cities_api(resp));
      dispatch(citiesRed.all_cities(resp))
      setBgCities(resp[0].img)
    })  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hadleSubmit = (event) =>{
    event.preventDefault()
    // console.log( inputSearch.current.value);
    if (inputSearch.current.value){
      const queryParams = "?city=" + inputSearch.current.value;
      getAllCities(queryParams).then((res) => dispatch(citiesRed.cities_api(res)) ).catch((err)=> console.log(err))
      
    } else {
      dispatch(citiesRed.cities_api(allCitiesInStore))
    }
  }

  return (
    <section
      className="pageCities py-5"
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

        <Row className="justify-content-center  my-3">

          {citiesInStore.length > 0 ? (
            citiesInStore.map((city, key) => (
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
                    
                    <PageRouter to={city._id}  className="btn btn-primary  position-absolute bottom-0  py-1 px-2 mb-1 mx-1">More details</PageRouter>
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
