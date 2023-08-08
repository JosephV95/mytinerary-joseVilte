import Carousel from "react-bootstrap/Carousel";
import "./slider.css";
import CarouselItem from "./CarouselItem";

export default function Slider() {
  let data = [
    {nation:"Japón", city:"Kioto", img:"https://pbs.twimg.com/media/EnxX4tlXcAAC3ui.jpg"},
    {nation:"Japón", city:"Akihabara", img:"https://pbs.twimg.com/media/DvaS0VSWkAAPvbZ.jpg"},
    {nation:"Japón", city:"Kioto Pagoda", img:"https://wordery.com/jackets/b96f7e73/mushoku-tensei-jobless-reincarnation-manga-vol-11-rifujin-na-magonote-9781645057406.jpg"},
    {nation:"Ingland", city:"Big Ben", img:"https://somoskudasai.com/wp-content/uploads/2020/05/EZBgn41U0AAHbcg.jpg"},
    {nation:"Ingland", city:"Big Ben", img:"https://pbs.twimg.com/media/D1vv4bVX0AE2Fws.jpg"},
    {nation:"Ingland", city:"Big Ben", img:"https://somoskudasai.com/wp-content/uploads/2020/05/EZBgn41U0AAHbcg.jpg"},
    {nation:"Suiza", city:"Muslisbury", img:"../kioto.jpg"},
    {nation:"Japón", city:"Akihabara", img:"../Akihabara.jpg"},
    {nation:"Japón", city:"Akihabara", img:"https://static.okian.ro/media/catalog/product/import/9781642751192.jpg"},
    {nation:"Japón", city:"Akihabara", img:"../Akihabara.jpg"},
    {nation:"Japón", city:"Kioto", img:"../Akihabara.jpg"},
    {nation:"Japón", city:"Kioto", img:"../Akihabara.jpg"},
    
  ];
  let data1 = data.slice(0, 4);
  let data2 = data.slice(4, 8);
  let data3 = data.slice(8, 12);
  return (
    <div className="container my-2">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <Carousel>
            <Carousel.Item interval={3000}>
              <CarouselItem unarray={data1}/>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <CarouselItem unarray={data2}/>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <CarouselItem unarray={data3}/>
            </Carousel.Item>
            
          </Carousel>
        </div>
      </div>
    </div>
  );
}
