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
  
  let data1 = data.slice(0, 4);
  let data2 = data.slice(4, 8);
  let data3 = data.slice(8, 12);
  
  return (
    <div className="container my-2">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <Carousel>
            <Carousel.Item interval={3000}>
              <CarouselItem unarray={data1} />
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <CarouselItem unarray={data2} />
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <CarouselItem unarray={data3} />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
