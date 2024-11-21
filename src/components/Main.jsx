import { useEffect } from "react";
import { Link as PageRouter } from "react-router-dom";
import citiesActions from "../store/actions/citiesAction";
import CallToAction from "./CallToAction/CallToAction";
import "./main.css";
import { useDispatch, useSelector } from "react-redux";

function Main() {
  let allCitiesInStore = useSelector((store) => store.citiesReducer.cities);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(citiesActions.get_cities());
    console.log(allCitiesInStore);
    
    // getAllCities().then((res) => {dispatch(citiesActions.all_cities(res))}).catch((error) => {console.log(error.message)});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className=" main">
        {" "}
        {/*style={{backgroundImage:"url('https://images.unsplash.com/photo-1606820854416-439b3305ff39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize:"cover", backgroundPosition:"center"}} */}
        <h4
          className="my-4 text-center px-3 "
          data-aos="zoom-out"
          data-aos-duration="700"
          data-aos-delay="300"
        >
          <span className="fst-italic">Mitinerary:</span> tu aliado para una
          visita perfecta en cada viaje.
        </h4>
        <div className="container">
          <div
            className="row hero  justify-content-center align-items-center my-3"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="hero-article col-md-8 text-center text-white">
              <div className="p-0 pb-3 mt-3">
                <p className="pb-1 " style={{ fontSize: "1.1rem" }}>
                  MyTinerary te ayuda a descubrir los mejores destinos y a
                  aprovechar al máximo tu viaje. Con una amplia variedad de
                  itinerarios en ciudades de todo el mundo, planificar tu
                  próxima aventura nunca ha sido tan fácil
                </p>
              </div>
            </div>
            {/* <div className=" col-md-4 hero-img d-flex justify-content-center p-1">
              <img src="https://img.pikbest.com/png-images/20190917/national-day-travel-girl-flying-cartoon-animated-gif-element_2676561.png!bw700" alt="imgHero" style={{maxHeight: "280px"}}/>
            </div> */}
          </div>
        </div>
        <div className="container-fluid">
          {/* <h3 className="text-center text-white py-2 fw-bold z-3">
            Ciudades Populares!
          </h3> */}
          <div className="row ">
            {/* <Slider/>*/}

            {allCitiesInStore.slice(0, 5).map((city, key) => (
              <div
                key={key}
                className="cityDeHome bg-dark pt-2 pb-3 ps-3 ps-md-4 py-lg-3 ps-lg-4 d-flex flex-column justify-content-between"
                style={{
                  "--bg-image-url": `url(${city.img})`,
                }}
              >
                <div className="textoCityHome text-white">
                  <h3>{city.city}</h3>
                  <p className="fst-italic">{city.nation}</p>
                </div>
                <div>
                  <button >
                    
                  </button>
                  <PageRouter to={"cities/"+ city._id} 
                      type="button" className="btn btn-outline-light"
                      onClick={()=>{window.scrollTo(0, 0)}}> 
                      Ver {city._itineraries ?city._itineraries.length :"0" } Itinerarios
                      </PageRouter>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center">
            <CallToAction />
          </div>

          {/* <div className="col-12" style={{ overflow: "hidden" }}>
            <svg
              preserveAspectRatio="none"
              viewBox="0 0 1200 120"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fill: "#0F28499f", width: "300%", height: 500 }}
            >
              <path d="M1200 120L0 16.48V0h1200v120z" />
            </svg>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Main;
