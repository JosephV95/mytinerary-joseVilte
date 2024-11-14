import CallToAction from "./CallToAction/CallToAction";
import "./main.css";

function Main() {
  return (
    <>
      <section className=" main">
        {" "}
        {/*style={{backgroundImage:"url('https://images.unsplash.com/photo-1606820854416-439b3305ff39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize:"cover", backgroundPosition:"center"}} */}
        <h4
          className="my-4 text-center px-3 fst-italic"
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          Find your perfect trip, designed by insiders who know and love their
          cities!
        </h4>
        <div className="container">
          <div
            className="row hero  justify-content-center align-items-center my-3"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="hero-article col-md-7 text-center text-white">
              <div className="p-0 pb-3 mt-3">
                <h3>
                  Con Mitinerary encontraras el destino perfecto para tu viaje
                </h3>
                <p className="pb-1">
                  MyTinerary te ayudará a descubrir los mejores lugares y asi
                  aprovechar al máximo tu viaje.
                </p>
                <p>
                  Contamos con una gran cantidad de itinerarios de las distintas
                  ciudades del mundo, planificar su próximo viaje nunca ha sido
                  tan fácil.
                </p>

                <CallToAction />
              </div>
            </div>
            {/* <div className=" col-md-4 hero-img d-flex justify-content-center p-1">
              <img src="https://img.pikbest.com/png-images/20190917/national-day-travel-girl-flying-cartoon-animated-gif-element_2676561.png!bw700" alt="imgHero" style={{maxHeight: "280px"}}/>
            </div> */}
          </div>
        </div>
        <div className="container-fluid">
          <h3 className="text-center text-white py-2 fw-bold z-3">
            Ciudades Populares!
          </h3>
          <div className="row ">
            {/* <Slider/>*/}

            <div className="cityDeHome bg-primary p-3 d-flex flex-column justify-content-between">
              <div className="textoCityHome text-white">
                <h3>titulo city</h3>
                <p>Pais</p>
              </div>
              <p>descripcions</p>
              <button type="button" className="btn btn-danger"> ir al los itinerarios</button>
            </div>
            <div className="cityDeHome bg-success px-0">
              <h3>titulo 2do</h3>
              <button type="button"> Ver los itinerarios</button>
            </div>
            <div className="cityDeHome bg-warning px-0">
              <h3>titulo 2do</h3>
              <button type="button"> Ver los itinerarios</button>
            </div>
            <div className="cityDeHome bg-success px-0">
              <h3>titulo 2do</h3>
              <button type="button"> Ver los itinerarios</button>
            </div>
            <div className="cityDeHome bg-warning px-0">
              <h3>titulo 2do</h3>
              <button type="button"> Ver los itinerarios</button>
            </div>

            {/* <div className="col-12 col-md-6 bg-danger px-0">
              <div className="col-12" style={{overflow: "hidden"}}>
                  <svg
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fill: '#0F28499f', width: '300%', height: 300, position: "absolute"}}
                  >
                    <path d="M1200 120L0 16.48V0h1200v120z" />
                  </svg>
                  
              <h3>titulo 2do</h3>
              <button type="button"> Ver los itinerarios</button>
              </div>
            </div> */}
            
          </div>
          <div className="cityInHome"></div>
          <div className="cityInHome"></div>
          <div className="cityInHome"></div>

          <div className="col-12" style={{overflow: "hidden"}}>
                <svg
                  preserveAspectRatio="none"
                  viewBox="0 0 1200 120"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: '#0F28499f', width: '300%', height: 500, }}
                >
                  <path d="M1200 120L0 16.48V0h1200v120z" />
                </svg>
              </div>
        </div>
      </section>
    </>
  );
}

export default Main;
