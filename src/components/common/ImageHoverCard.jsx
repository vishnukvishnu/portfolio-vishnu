const ImageHoverCard = ({ frontImg, backImg, title, desc }) => {
  return (
    <div className="col-12 col-md-6 col-xxl-4">
      <div className="cards">
        <img className="card-front" src={frontImg} alt="" />
        <div className="card-back flex-center">
          <img src={backImg} alt="project images" />
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageHoverCard;
