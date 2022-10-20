import Title from './common/Title'
import Card from './common/Card'

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <Title title="Get in touch" subTitle="Let's build something togther :)" />
      <div className="row contact-details-wrapper">
        <Card  title="Location" subTitle="Kerala, India" icon="fa-map-marker-alt"/>
        <Card  title="Phone" subTitle="(91) 9645160131" icon="fa-phone"/>
        <Card  title="Email" subTitle="vishnulogan4@gmail.com" icon="fa-envelope"/>
      </div>
    </div>
  );
};

export default Contact;
