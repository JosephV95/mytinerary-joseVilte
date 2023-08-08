import CarouselCard from "./CarouselCard";

export default function CarouselItem({ unarray }) {
  return (
    <div className="container  carItem">
      <div className="row justify-content-center">
        {unarray.map((each, key) => (
          <CarouselCard
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
