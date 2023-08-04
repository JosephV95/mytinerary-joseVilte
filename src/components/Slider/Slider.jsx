import Carousel from "react-bootstrap/Carousel";
import "./slider.css";

export default function Slider() {
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <Carousel>
            <Carousel.Item interval={10000}>
              <div className="container  item4Carousel">
                <div className="row ">
                  <div className="col-6">
                    <div className="img-caro py-1 m-0">
                      <img src="../Akihabara.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="img-caro py-1 m-0">
                      <img src="../Big ben.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="img-caro py-1 m-0">
                      <img src="../kioto.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="img-caro py-1 m-0">
                      <img src="../kioto pagoda.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <div className="container  item4Carousel">
                <div className="row">
                  <div className="col-6">
                    <div className="img-caro py-1">
                      <img src="../Akihabara.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-6 bg-danger">
                    <div className="img-caro py-1">
                      <img src="../Mümliswil-Ramiswil - Suiza.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="img-caro py-1">
                      <img src="../Mümliswil-Ramiswil - Suiza.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="img-caro py-1">
                      <img src="../kioto pagoda.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <div className="container  item4Carousel">
                <div className="row">
                  <div className="col-6">
                    <div className="img-caro py-1">
                      <img src="../Akihabara.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="img-caro py-1">
                      <img src="../Mümliswil-Ramiswil - Suiza.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="img-caro py-1">
                      <img src="../kioto.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="img-caro py-1">
                      <img src="../kioto pagoda.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
