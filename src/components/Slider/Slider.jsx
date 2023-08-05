import Carousel from "react-bootstrap/Carousel";
import "./slider.css";

export default function Slider() {
  return (
    <div className="container my-2">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <Carousel>
            <Carousel.Item interval={10000}>
              <div className="container  item4Carousel">
                <div className="row ">
                  <div className="col-6">
                    <div className="sliderItem py-2 m-0 ">
                      <img src="../Akihabara.jpg" alt="" />
                      <div className="text-img">
                        <h5>Mümliswil-Ramiswil</h5>
                        <p>Japón</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="sliderItem py-2 m-0 ">
                      <img src="../Big ben.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="sliderItem py-2 m-0 ">
                      <img src="../kioto.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="sliderItem py-2 m-0 ">
                      <img src="../kioto pagoda.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            
            <Carousel.Item interval={1000}>
              <div className="container  item4Carousel">
                <div className="row">
                  <div className="col-6">
                    <div className="sliderItem py-2 m-0">
                      <img src="../Akihabara.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div className="sliderItem py-2 m-0">
                      <img src="../Mümliswil-Ramiswil - Suiza.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="sliderItem py-2 m-0">
                      <img src="../Mümliswil-Ramiswil - Suiza.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="sliderItem py-2 m-0">
                      <img src="../kioto pagoda.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <div className="container  item4Carousel">
                <div className="row">
                  <div className="col-6">
                    <div className="sliderItem py-2 m-0">
                      <img src="../Akihabara.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="sliderItem py-2 m-0">
                      <img src="../Mümliswil-Ramiswil - Suiza.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="sliderItem py-2 m-0">
                      <img src="../kioto.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="sliderItem py-2 m-0">
                      <img src="../kioto pagoda.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

          </Carousel>
        </div>
      </div>
    </div>
  );
}
