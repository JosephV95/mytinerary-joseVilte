import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./cityDetail.css";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../../store/actions/citiesAction";
import itinerariesActions from "../../store/actions/itinerariesAction";

export default function CityDetail() {
  const { id } = useParams();
  const cityInStore = useSelector(store => store.citiesReducer.city)
  const dispatch = useDispatch()
  const ityStore = useSelector(store => store.itinerariesReducer.itineraries)

  useEffect(() => {
    dispatch(citiesActions.get_one_city(id));
    dispatch(itinerariesActions.get_itineraries(id));
    // console.log(cityInStore._itineraries);

    
    console.log(ityStore);
    // return ()=> dispatch(itinerariesActions.reset_ity()) //! dispatch para reiniciar valores al salir o cambiar de pagina
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-0">
      <div className="container-fluid">
        
            <div 
            className="row justify-content-center detailCity"
            style={{ backgroundImage: `url(${cityInStore.img})`, height: "75vh" }}
          >
            <div className="col-12 col-md-6 heroDetail  text-center text-white d-flex flex-column justify-content-center ">
              <h2 className="py-4">{cityInStore.city}</h2>
              <p>{cityInStore.nation}</p>
              <p>{cityInStore.description}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                voluptas ipsam itaque placeat ullam fuga. Corrupti, dolorem
                pariatur modi sint veritatis vel autem hic, molestias natus sed
                eum provident repellendus!
              </p>

              <button type="button" className="btn btn-primary my-3">View itineraries</button>
            </div>
          </div>
          {ityStore.length>0 ?(
              ityStore.map((iti, key)=>(
                <h5 key={key}>{iti.name}</h5>
              ))
          ) :(
            <h3>No hay itinerarios</h3>
          )
        }

          <div className="row ">
            <div className="col-12  py-5 my-5">
              <h3 className="text-center">Site on construction!</h3>
            </div>
          </div>
          
        
      </div>
    </section>
  );
}
