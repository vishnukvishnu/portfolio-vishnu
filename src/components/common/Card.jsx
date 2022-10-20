const Card = ({ title, subTitle, icon }) => {
  return (
    <div className="col-sm-4 scroll-wrapper">
      <div className="cards">
        <i className={`fa ${icon}`}></i>
        <h5>{title}</h5>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default Card;
