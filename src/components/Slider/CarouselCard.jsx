export default function CarouselCard({nation, city, img}) {
  return (
    <div className="col-6 col-xs-6 col-sm-6 col-md-3 m-0 p-0 ">
      <div className="carouselCard   ">
        <img src={img} alt={city} />
        <div className="text-img">
          <h5>{city}</h5>
          <p>{nation}</p>
        </div>
      </div>
    </div>
  );
}
