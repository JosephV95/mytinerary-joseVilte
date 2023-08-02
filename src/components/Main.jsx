import reactLogo from "../assets/react.svg";

function Main() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h3>Find the perfect destination</h3>
            <p>
              Our app will help you find the perfect path for your next trip.
              With an easy-to-use interface and a host of itinerary options,
              planning your next trip has never been easier.
            </p>
            <button type="button">View More</button>
          </div>
          <div className="col-4">
            <img src={reactLogo} alt="imgReact" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
