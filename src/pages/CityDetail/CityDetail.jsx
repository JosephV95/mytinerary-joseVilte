import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./cityDetail.css";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../../store/actions/citiesAction";
import itinerariesActions from "../../store/actions/itinerariesAction";
// import { DiscussionEmbed } from 'disqus-react';
import { Accordion } from "react-bootstrap";
import AddItinerary from "../../components/ItinerariesModal/AddItinerary";

export default function CityDetail() {
  const { id } = useParams();
  const cityInStore = useSelector((store) => store.citiesReducer.city);
  const dispatch = useDispatch();
  const itineraryStore = useSelector(
    (store) => store.itinerariesReducer.itineraries
  );

  //!  variables necesarias de react-disqus
  // const disqusShortname = 'http-localhost-5173-cities'; // Reemplaza con tu shortname de Disqus
  // const disqusConfig = {
  //   url: 'https://viltejosedev.netlify.app/', // Reemplaza con la URL de tu página
  //   identifier: 'Mytinerary', // Un identificador único para cada página que tenga comentarios de Disqus
  //   title: 'My Tinerary', // Reemplaza con el título de tu página
  // };

  // window.scrollTo(0, 0)

  useEffect(() => {
    dispatch(citiesActions.get_one_city(id));
    dispatch(itinerariesActions.get_itineraries(id));
    // console.log(cityInStore._itineraries);
    // console.log(itineraryStore);

    // return ()=> dispatch(itinerariesActions.reset_ity()) //! dispatch para reiniciar valores al salir o cambiar de pagina
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className="py-0 bg-info">
        <div className="container-fluid ">
          <div
            className="row justify-content-center detailCity"
            style={{ backgroundImage: `url(${cityInStore.img})`, height: "75vh" }}
          >
            <div className="col-12 col-md-6 heroDetail  text-center text-white d-flex flex-column justify-content-center pt-5" 
            data-aos="zoom-out" data-aos-duration="700" data-aos-delay="400">
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

      <section>
        <div className="container  " >
            <h2 className="text-center text-white" id="Itineraries"><i className="fa-solid fa-signs-post"></i> <i>Itineraries</i></h2>
            <AddItinerary/>
          <div className="row justify-content-center gap-4 py-4">
            {itineraryStore.length > 0 ? (
              itineraryStore.map((itinerary) => (
                // <div >
                  <div key={itinerary._id}   data-aos-duration="1400"  
                  className="col-12 col-md-10  rounded-5  overflow-x-hidden " style={{backgroundColor:"rgb(10, 108, 128)"}}>
                    <div className="row justify-content-center  ">
                      <div
                        className="col-md-5  text-white d-flex flex-column justify-content-between rounded-start-3 px-4 "
                        style={{
                          backgroundImage: `url(${itinerary.img})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          minHeight: "15rem",
                        }}
                      >
                        <div >
                          <h3 className="pt-2  text-center" style={{textShadow:'0 0 15px gray,0 0 15px gray,0 0 20px gray,0 0 20px black'}}>{itinerary.name}</h3>
                        </div>
                        <div>
                          <h5 className="text-end"> <i className="fa-regular fa-circle-user"></i> Username</h5>
                        </div>
                        
                      </div>
                      <div className="col-md-7 text-white py-3 px-4">
                        <p>{itinerary.desc}</p>
                        <div className="row  infoItinerary">
                          <div className="col-sm-4">
                            <p><b>Price: </b>  {itinerary.price ==0 ? "Free" : "$"+itinerary.price}</p>
                          </div>
                          <div className="col-sm-8">
                            <p><b>Duration:</b> {itinerary.duration}</p>
                          </div>
                          <div className="col-sm-4">
                            <p><b>Likes: </b> <a type="button" onClick={()=>{alert("diste like")}}><i className="fa-regular fa-thumbs-up" style={{fontSize: "21px"}} ></i></a>  {itinerary.likes}</p>
                          </div>
                          {/* <div className="col-sm-8"> */}
                            <p><b>Tags:</b>{itinerary.hastag.map((val, key)=>(<a key={key}> {val}</a> ))}  </p>
                          {/* </div> */}
                        </div>
                        <p><b>Comments:</b> {itinerary.comments}</p>
                        <Accordion >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header >Comentarios sobre el iti</Accordion.Header>
                            <Accordion.Body>
                              <span><b>{itinerary.name}</b></span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure dolor in
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                            <Accordion.Body>
                              <span><b>{itinerary.name}</b></span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure dolor in
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                            <Accordion.Body>
                              <span><b>{itinerary.name}</b></span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure dolor in
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                          
                        </Accordion>
                      </div>
                    </div>
                  </div>
                // </div>
              ))
            ) : (
               <div className="col-12  text-center">
                 <img src="../sorryIco.png" alt="no results" style={{width:'12rem'}} />
                 <h2 className="text-center">No itineraries yet.</h2>
               </div>
            
            )}
          </div>

          {/* <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} className="w-100 p-2" style={{background: "#151120ab"}} /> */}
        </div>

      </section>

    </>
  );
}
