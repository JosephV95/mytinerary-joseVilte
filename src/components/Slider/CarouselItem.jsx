import CarouselCard from "./CarouselCard";

export default function CarouselItem({ unarray }) {
  return (
    <div className="container-fluid  carItem">
      <div className="row justify-content-center m-0 p-0">
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
