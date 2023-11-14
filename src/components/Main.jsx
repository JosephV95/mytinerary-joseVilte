import CallToAction from "./CallToAction/CallToAction";
import Slider from "./Slider/Slider";
import "./main.css";

function Main() {
  return (
    <>
      <section className="py-4  main" style={{backgroundImage:"url('https://images.unsplash.com/photo-1421091242698-34f6ad7fc088?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize:"cover", backgroundPosition:"center"}}>
        <h4 className="my-4 text-center px-3 fst-italic" data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="1000">Find your perfect trip, designed by insiders who know and love their cities!</h4>
        <div className="container" >
          <div className="row hero  justify-content-center align-items-center my-3" data-aos="fade-down" data-aos-duration="1000">
            <div className="hero-article col-md-7 text-center text-white">
              <div className=" p-3 mt-3">
                <h3>Find the perfect destination</h3>
                <p className="pb-2">
                  Our app will help you find the perfect path for your next
                  trip. With an easy-to-use interface and a host of itinerary
                  options, planning your next trip has never been easier.
                </p>

                <CallToAction />
                
              </div>
            </div>
            <div className=" col-md-4 hero-img d-flex justify-content-center p-1">
              <img src="https://images.unsplash.com/photo-1485731226153-303323e1c49b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt="imgHero" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-12 px-0" data-aos="fade" data-aos-duration="1100">
              <h3 className="text-center text-white py-2 fw-bold">Popular MyTineraries!</h3>
              <Slider/>
            </div>
          </div>
        </div>
      
      
      </section>
    </>
  );
}

export default Main;
