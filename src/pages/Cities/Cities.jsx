import { useEffect, useState } from "react";
import "../Cities/cities.css";
export default function Cities() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("src/utils/dataCities.json")
      .then((response) => response.json())
      .then(
        // info => console.log(info);
        (info) => setData(info)
      )
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <section className="cities">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12  py-5">
            <h3>Cities</h3>
            <p>Collection of the most beatiful places and experience.</p>

            {data.map((city, key) => (
              <p key={key}>{city.nation} </p>
            ))}
          </div>

          <div className="col-12 py-3">
            <input type="search" name="" id="" placeholder="Search your City" />
          </div>
        </div>

        <div className="row contenedor de cities"></div>
      </div>
    </section>
  );
}
