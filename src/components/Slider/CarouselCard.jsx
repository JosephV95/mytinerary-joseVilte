export default function CarouselCard({nation, city, img}) {
  return (
    <div className="col-6">
      <div className="carouselCard py-2 m-0 ">
        <img src={img} alt={city} />
        <div className="text-img">
          <h5>{city}</h5>
          <p>{nation}</p>
        </div>
      </div>
    </div>
  );
}
