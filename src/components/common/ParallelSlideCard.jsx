const ParallelSlideCard = ({ frontTitle, backTitle, icon, tasks }) => {
  return (
    <div className="col-sm-6">
      <div className="slide-wrapper">
        <div className="slide card-front">
          <div>
            <div className="icon-wrapper">
              <i className={`fa ${icon}`}></i>
            </div>
          </div>
          <div className="content-wrappwer">
            <p>{frontTitle}</p>
          </div>
        </div>
        <div className="slide card-back">
          <div className="dev-info">
            <h4>{backTitle}</h4>
            <ul>
              {tasks.map((task) => (
                <li>
                  <i className="fa fa-play" aria-hidden="true"></i>
                  {task}
                </li>
              ))}
            </ul>
          </div>
          <div className="btn-wrapper">
            <a
              href="https://api.whatsapp.com/send?phone=9645160131"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-std me-2">Whatsapp</button>
            </a>
            <a href="tel:+9645160131" target="_blank" rel="noreferrer">
              <button className="btn-std"> Call </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallelSlideCard;
