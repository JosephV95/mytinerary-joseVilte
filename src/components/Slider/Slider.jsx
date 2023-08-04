import Carousel from "react-bootstrap/Carousel";
import "./slider.css"

export default function Slider() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-12">
          <Carousel>
            <Carousel.Item interval={3000}>
              <div id="caro1"></div>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div id="caro2"></div>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div id="caro3"></div>
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
