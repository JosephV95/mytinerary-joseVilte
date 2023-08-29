import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCity } from "../../services/CitiesService";
import "./cityDetail.css";

export default function CityDetail() {
  const [city, setCity] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getCity(id).then((res) => setCity(res));
  }, [id]);

  return (
    <section className="py-0">
      <div className="container-fluid">
        <div
          className="row justify-content-center detailCity"
          style={{ backgroundImage: `url(${city.img})`, height: "75vh" }}
        >
          <div className="col-12 col-md-6 heroDetail  text-center text-white d-flex flex-column justify-content-center ">
            <h2 className="py-4">{city.city}</h2>
            <p>{city.nation}</p>
            <p>{city.description}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptas ipsam itaque placeat ullam fuga. Corrupti, dolorem
              pariatur modi sint veritatis vel autem hic, molestias natus sed
              eum provident repellendus!
            </p>

            <button type="button" className="btn btn-primary my-3">View itineraries</button>
          </div>
        </div>

        <div className="row ">
          <div className="col-12  py-5 my-5">
            <h3 className="text-center">Site on construction!</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
