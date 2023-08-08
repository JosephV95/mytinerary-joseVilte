import Slider from "./Slider/Slider";
import "./main.css";


function Main() {
  return (
    <>
      <section className="py-4">
        <h4 className="my-4 text-center px-3"> <i>Find your perfect trip, designed by insiders who know and love their cities! </i></h4>
        <div className="container">
          <div className="row hero  justify-content-center align-items-center my-4">
            <div className="hero-article col-md-8">
              <div className=" p-3 my-3">
                <h3>Find the perfect destination</h3>
                <p>
                  Our app will help you find the perfect path for your next
                  trip. With an easy-to-use interface and a host of itinerary
                  options, planning your next trip has never been easier.
                </p>
                <button className="btn btn-info " type="button">
                  View More
                </button>
              </div>
            </div>
            <div className="col-md-4 hero-img d-flex justify-content-center p-1">
              <img src="https://images.theconversation.com/files/271802/original/file-20190430-136800-n73r21.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip" alt="imgHero" />
            </div>
          </div>

          <div className="row justify-content-center my-5">
            <button className="btn btn-danger" type="button">
              Call to Action
            </button>
          </div>
          <div className="row my-5">
          {/* <div className="col-12"> */}
            <h3 className="text-center py-2">Popular Mytineraries</h3>
            <Slider/>
          {/* </div> */}
        </div>
        </div>
      </section>

      
    </>
  );
}

export default Main;
