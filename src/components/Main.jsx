import reactLogo from "../assets/react.svg";
import Slider from "./Slider/Slider";
import "./main.css";


function Main() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 ">
              <div className="article p-4 ">
                <h3>Find the perfect destination</h3>
                <p>
                  Our app will help you find the perfect path for your next
                  trip. With an easy-to-use interface and a host of itinerary
                  options, planning your next trip has never been easier.
                </p>
                <button className="btn btn-info" type="button">
                  View More
                </button>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <img src={reactLogo} alt="imgReact" />
            </div>
          </div>

          <div className="row justify-content-center">
            <button className="btn btn-danger" type="button">
              Call to Action
            </button>
          </div>
          <div className="row">
          <div className="col-12">
            <h3>Popular Mytineraries</h3>
            <Slider/>
          </div>
        </div>
        </div>
      </section>

      <section>
        
        
      </section>
    </>
  );
}

export default Main;
