import Carousel from "react-bootstrap/Carousel";
import "./slider.css";
import SliderItem from "./SliderItem";

export default function Slider() {
  let data = [
    {nation:"Japón", city:"Kioto", img:"../kioto.jpg"},
    {nation:"Japón", city:"Akihabara", img:"../Akihabara.jpg"},
    {nation:"Japón", city:"Kioto Pagoda", img:"../kioto pagoda.jpg"},
    {nation:"Ingland", city:"Big Ben", img:"../Big ben.jpg"},
    {nation:"Suiza", city:"Muslisbury", img:"../kioto.jpg"},
    {nation:"Japón", city:"Akihabara", img:"../Akihabara.jpg"},
    {nation:"Japón", city:"Akihabara", img:"../Akihabara.jpg"},
    {nation:"Japón", city:"Akihabara", img:"../Akihabara.jpg"},
    {nation:"Japón", city:"Kioto", img:"../Akihabara.jpg"},
    // {nation:"Japón", city:"Kioto", img:"../Akihabara.jpg"},
  ];
  let data4 = data.slice(0, 4);
  return (
    <div className="container my-2">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <Carousel>
            <Carousel.Item interval={10000}>
              <div className="container  item4Carousel">
                <div className="row justify-content-center">
                  {
                   data4.map((each, key)=>
                    <SliderItem key={key} nation={each.nation} city={each.city} img={each.img} />
                  )}
                  {/* <SliderItem nation={"Japón"} city={"Akihabara"} img={"../Akihabara.jpg"} />
                  <SliderItem nation={"Japón"} city={"Akihabara"} img={"../Akihabara.jpg"} />
                  <SliderItem nation={"Japón"} city={"Akihabara"} img={"../Akihabara.jpg"} />
                  <SliderItem nation={"Japón"} city={"Akihabara"} img={"../Akihabara.jpg"} /> */}
                </div>
              </div>
            </Carousel.Item>
            
            <Carousel.Item interval={1000}>
              <div className="container  item4Carousel">
                <div className="row justify-content-center">
                  <SliderItem nation={"Japón"} city={"Akihabara"} img={"../Akihabara.jpg"} />
                  <SliderItem nation={"Japón"} city={"Akihabara"} img={"../Akihabara.jpg"} />
                  <SliderItem nation={"Japón"} city={"Akihabara"} img={"../Akihabara.jpg"} />
                  <SliderItem nation={"Japón"} city={"Akihabara"} img={"../Akihabara.jpg"} />
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <div className="container  item4Carousel">
                <div className="row">
                  
                  <SliderItem nation={"Japón"} city={"Akihabara"} img={"../Akihabara.jpg"} />
                  <SliderItem nation={"Japón"} city={"Akihabara"} img={"../Akihabara.jpg"} />
                  <SliderItem nation={"Japón"} city={"Akihabara"} img={"../Akihabara.jpg"} />
                  <SliderItem nation={"Japón"} city={"Akihabara"} img={"../Akihabara.jpg"} />
                </div>
              </div>
            </Carousel.Item>

          </Carousel>
        </div>
      </div>
    </div>
  );
}
