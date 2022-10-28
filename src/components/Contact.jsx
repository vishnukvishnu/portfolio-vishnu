import Title from './common/Title';
import Card from './common/Card';
import { useEffect, useRef, useContext } from 'react';
import { containerContext } from '../App';

const Contact = () => {
  const contactSection = useRef(0);
  const { setContact } = useContext(containerContext);
  useEffect(() => {
    setContact(contactSection.current.offsetTop, 'contact');
  }, []);
  return (
    <div className="contact-wrapper header-align" ref={contactSection}>
      <Title title="Get in touch" subTitle="Let's build something togther :)" />
      <div className="row contact-details-wrapper">
        <Card
          title="Location"
          subTitle="Kerala, India"
          icon="fa-map-marker-alt"
        />
        <Card title="Phone" subTitle="(91) 9645160131" icon="fa-phone" />
        <Card
          title="Email"
          subTitle="vishnulogan4@gmail.com"
          icon="fa-envelope"
        />
      </div>
    </div>
  );
};

export default Contact;
