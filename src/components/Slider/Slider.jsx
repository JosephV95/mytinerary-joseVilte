import Carousel from "react-bootstrap/Carousel";
import "./slider.css";
import CarouselItem from "./CarouselItem";
import { useEffect, useState } from "react";

export default function Slider() {

  let [data, setData] = useState([]);
  useEffect(() => {
    fetch('src/utils/dataCities.json').then((response) => response.json())
    .then(
      // info => console.log(info);
      info => setData(info)
    )
    .catch((error) => {console.log(error.message)});
  }, []);
  
 
  return (
    <div className="container my-2">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <Carousel>
            <Carousel.Item interval={1000}>
              <CarouselItem unarray={data.slice(0,4)} />
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <CarouselItem unarray={data.slice(4,8)} />
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <CarouselItem unarray={data.slice(8,12)} />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
