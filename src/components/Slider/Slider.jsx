import Carousel from "react-bootstrap/Carousel";
import "./slider.css";
import CarouselItem from "./CarouselItem";
import { useEffect } from "react";

// import { getAllCities } from '../../services/CitiesService.js';
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../../store/actions/citiesAction";

export default function Slider() {

  let allCitiesInStore = useSelector(store => store.citiesReducer.allCities);
  const dispatch = useDispatch()
  useEffect(() => {
    // getAllCities().then((res) => {dispatch(citiesActions.all_cities(res))}).catch((error) => {console.log(error.message)});

    dispatch(citiesActions.get_cities())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="container-fluid   bg-dark">
      <div className="row justify-content-center">
        <div className="col-md-12  px-1">
          <Carousel className="pb-2 pt-1">
            <Carousel.Item interval={2000}>
              <CarouselItem unarray={allCitiesInStore.slice(0,4)} />
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <CarouselItem unarray={allCitiesInStore.slice(4,8)} />
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <CarouselItem unarray={allCitiesInStore.slice(8,12)} />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
