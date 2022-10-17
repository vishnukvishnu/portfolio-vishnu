const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-header-wrapper">
        <h1 className="header-1">Get in touch</h1>
        <p className="mb-0 roboto-medium">Let's build something togther :)</p>
      </div>
      <div className="row contact-details-wrapper">
        <div className="col-sm-4 scroll-wrapper">
          <div className="cards">
            <i className="fa fa-map-marker-alt"></i>
            <h5>Location</h5>
            <p>Kerala, India</p>
          </div>
        </div>
        <div className="col-sm-4 scroll-wrapper">
          <div className="cards">
            <i className="fa fa-phone"></i>
            <h5>Phone</h5>
            <p>(91) 9645160131</p>
          </div>
        </div>
        <div className="col-sm-4 scroll-wrapper">
          <div className="cards">
            <i className="fa fa-envelope"></i>
            <h5>Email</h5>
            <p>vishnulogan4@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
