import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./cityDetail.css";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../../store/actions/citiesAction";

export default function CityDetail() {
  const { id } = useParams();
  const cityInStore = useSelector(store => store.citiesReducer.cities)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(citiesActions.get_one_city(id))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-0">
      <div className="container-fluid">
        {cityInStore.map((oneCity, key) =>(
          <>
            <div key={key}
            className="row justify-content-center detailCity"
            style={{ backgroundImage: `url(${oneCity.img})`, height: "75vh" }}
          >
            <div className="col-12 col-md-6 heroDetail  text-center text-white d-flex flex-column justify-content-center ">
              <h2 className="py-4">{oneCity.city}</h2>
              <p>{oneCity.nation}</p>
              <p>{oneCity.description}</p>
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
        </>
        ))}
      </div>
    </section>
  );
}
