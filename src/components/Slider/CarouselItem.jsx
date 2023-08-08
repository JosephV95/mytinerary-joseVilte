import SliderItem from "./SliderItem";

export default function CarouselItem({ unarray }) {
  return (
    <div className="container  item4Carousel">
      <div className="row justify-content-center">
        {unarray.map((each, key) => (
          <SliderItem
            key={key}
            nation={each.nation}
            city={each.city}
            img={each.img}
          />
        ))}
      </div>
    </div>
  );
}
