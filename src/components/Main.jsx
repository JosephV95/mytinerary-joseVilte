import CallToAction from "./CallToAction/CallToAction";
import Slider from "./Slider/Slider";
import "./main.css";

function Main() {
  return (
    <>
      <section className="py-5  main" > {/*style={{backgroundImage:"url('https://images.unsplash.com/photo-1606820854416-439b3305ff39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize:"cover", backgroundPosition:"center"}} */}
        <h4 className="my-4 text-center px-3 fst-italic" data-aos="zoom-out" data-aos-duration="500" data-aos-delay="500">Find your perfect trip, designed by insiders who know and love their cities!</h4>
        <div className="container" >
          <div className="row hero  justify-content-center align-items-center my-3" data-aos="fade-down" data-aos-duration="1000">
            <div className="hero-article col-md-7 text-center text-white">
              <div className="p-0 pb-3 mt-3">
                <h3>Con Mitinerary encontraras el destino perfecto para tu viaje</h3>
                <p className="pb-1">
                  MyTinerary te ayudará a descubrir los mejores lugares y asi aprovechar al máximo tu viaje.
                </p>
                <p>Contamos con una gran cantidad de itinerarios de las distintas ciudades del mundo, planificar su próximo viaje nunca ha sido tan fácil.</p>

                <CallToAction />
              </div>
            </div>
            {/* <div className=" col-md-4 hero-img d-flex justify-content-center p-1">
              <img src="https://img.pikbest.com/png-images/20190917/national-day-travel-girl-flying-cartoon-animated-gif-element_2676561.png!bw700" alt="imgHero" style={{maxHeight: "280px"}}/>
            </div> */}
          </div>
        </div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-12 px-0" >
              <h3 className="text-center text-white py-2 fw-bold z-3">Ciudades Populares!</h3>

              {/* <Slider/>*/}
              
              <div className="cityInHome">
                <div className="col-6 bg-primary mx-0">
                  <h3>titulo city</h3>
                  <button type="button"> ir al los itinerarios</button>
                </div>

              </div>
              <div className="cityInHome">
              <div className="col-5 bg-danger mx-0">
                  <h3>titulo 2do</h3>
                  <button type="button"> ir al los itinerarios</button>
                </div>
              </div>
              <div className="cityInHome"></div>
              <div className="cityInHome"></div>
              <div className="cityInHome"></div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
