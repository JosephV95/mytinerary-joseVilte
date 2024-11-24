import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./cityDetail.css";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../../store/actions/citiesAction";
import itinerariesActions from "../../store/actions/itinerariesAction";
import { DiscussionEmbed } from 'disqus-react';
import AddItinerary from "../../components/ItinerariesModal/AddItinerary";
import EditDeleteItinerary from "../../components/ItinerariesModal/EditDeleteItinerary";
import ButtonLike from "../../components/ButtonLike/ButtonLike";

export default function CityDetail() {
  const { id } = useParams();
  const cityInStore = useSelector((store) => store.citiesReducer.city);
  const dispatch = useDispatch();
  const itineraryStore = useSelector((store) => store.itinerariesReducer.itineraries);
  const userLogged = useSelector( store=> store.userReducer)

  //!  variables necesarias de react-disqus
  const disqusShortname = 'mytinerarydemo'; // Reemplaza con tu shortname de Disqus
  const disqusConfig = {
    url: 'https://mytinerarydev.netlify.app/cities/'+id, // Reemplaza con la URL de tu página
    identifier: 'MyTinerary-'+id, // Un identificador único para cada página que tenga comentarios de Disqus
    title: 'MyTineraryDemo', // Reemplaza con el título de tu página
  };

  const [changeItineraries, setChangeItineraries] = useState(false)
  useEffect(() => {
    dispatch(citiesActions.get_one_city(id));
    dispatch(itinerariesActions.get_itineraries(id));

    setChangeItineraries(false)
    // return ()=> dispatch(itinerariesActions.reset_ity()) //! dispatch para reiniciar valores al salir o cambiar de pagina
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeItineraries]);

  return (
    <>
      <main className="py-0 bg-info">
        <div className="container-fluid ">
          <div
            className="row justify-content-center detailCity"
            style={{ backgroundImage: `url(${cityInStore.img})`, height: "75vh" }}
          >
            <div className="col-12 col-md-6 heroDetail  text-center text-white d-flex flex-column justify-content-center pt-5" 
            data-aos="zoom-out" data-aos-duration="700" data-aos-delay="400" >
              <h2 className="py-4">{cityInStore.city}</h2>
              <p style={{fontSize: "1.1rem", fontStyle:"italic"}}><i className="fa-solid fa-location-dot"></i> <b>{cityInStore.nation}</b></p>
              <p>{cityInStore.description}</p>
            </div>
            <a type="button" className="btn  text-white"  href="#Itineraries" style={{margin:'auto', fontSize: "2rem"}}>
              <i className="fa-solid fa-angles-down fa-bounce" ></i>
            </a>
          </div>
        </div>
      </main>

      <section className="bgCityDetail">
        <div className="container pb-3" >
        
            <h2 className="text-center text-white pb-3" id="Itineraries"><i className="fa-solid fa-signs-post"></i> <i>Itineraries</i></h2>
            <div hidden={userLogged.isLogged == false}>
              <AddItinerary efectoEnProp={()=> setChangeItineraries(true) }/>
            </div>
          
            {itineraryStore.length > 0 ? (
              itineraryStore.map((itinerary) => (
                <div className="row justify-content-center my-4" key={itinerary._id} >
                  <div data-aos="flip-down" data-aos-duration="700"  data-aos-once="true"
                    className="cardItinerary col-10 col-md-9 rounded-5  overflow-x-hidden position-relative " >
                    <div className="row justify-content-center ">
                      <div
                        className="col-md-5 cardItinerary__image position-relative text-white d-flex flex-column justify-content-between px-3"
                        style={{
                          backgroundImage: `url(${itinerary.img})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          minHeight: "14rem"
                        }}
                      >
                        <div>
                          <h3 className="pt-2 text-center" style={{textShadow:'0 0 15px gray,0 0 15px gray,0 0 20px gray,0 0 20px black'}}>{itinerary.name}</h3>
                        </div>
                        {itinerary._userCreator ? (
                          <div>
                            <h4 className="userNameIti text-end"><img src={itinerary._userCreator.photo} alt="PhotoUser" 
                            style={{height:"2.3rem", width:"2.3rem", borderRadius:"50%", display:"inline", border:"2px inset white", objectFit:"cover"}} /> {itinerary._userCreator.name}</h4>
                          </div>
                        ):(
                          <div>
                            <h4 className="text-end"> <i className="fa-regular fa-circle-user"></i> Username</h4>
                          </div>
                        )}
                      </div>
                      <div className="col-md-7 text-white pt-2 px-4 mb-2  d-flex flex-column gap-2 position-relative">
                        <p>{itinerary.desc}</p>
                        <div className="infoItinerary">
                          <span className="infoItinItem">
                            <p><b><i className="fa-solid fa-coins"></i> Price: </b>  {itinerary.price ==0 ? "Free" : "$"+itinerary.price}</p>
                          </span> 
                           <span className="infoItinItem">
                            <p><b><i className="fa-regular fa-clock"></i> Duration:</b> {itinerary.duration}</p>
                           </span>
                           <ButtonLike id={itinerary._id} likes={itinerary.name.length} ></ButtonLike>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*//todo condicionales que MOSTRARAN el div solo si el Itinerary tiene Autor(ingresa al id) y si es IGUAL al ID del usuario
                  //todo    logueado. Tambien se mostrara si el itinerary NO TIENE un Autor(userCreator) */}
                  {(itinerary._userCreator?._id === userLogged.user._id || !itinerary._userCreator) ?(
                    <div className="col-9 col-md-1 ps-1 pe-0"  >
                      <EditDeleteItinerary efectoEnProp={()=> setChangeItineraries(true)} idEnProp={itinerary._id} nameItiProp={itinerary.name}/>
                    </div>
                  ): null}
                  
                </div>
              ))
            ) : (
               <div className="col-12  text-center">
                 <img src="../sorryIco.png" alt="no results" style={{width:'12rem'}} />
                 <h2 className="text-center text-white">No itineraries yet.</h2>
               </div>
            )}
          

          
        </div>
        <div className="container-fluid" style={{background: "#151120ab"}} >
          <div className="row justify-content-center">
            <div className="col-10 pt-4 pb-3">
              <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
          </div>
        </div> 

      </section>

    </>
  );
}
