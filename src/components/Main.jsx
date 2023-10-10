import CallToAction from "./CallToAction/CallToAction";
import Slider from "./Slider/Slider";
import "./main.css";

function Main() {
  return (
    <>
      <section className="py-4  main">
        <h4 className="my-4 text-center px-3 fst-italic">Find your perfect trip, designed by insiders who know and love their cities!</h4>
        <div className="container">
          <div className="row hero  justify-content-center align-items-center my-3">
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
              <img src="https://images.theconversation.com/files/271802/original/file-20190430-136800-n73r21.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip" alt="imgHero" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-12 px-0">
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
