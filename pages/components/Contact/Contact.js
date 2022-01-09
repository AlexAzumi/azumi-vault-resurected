import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// Data
import { email, github } from '../../../data/contact';

/**
 * Component
 * @param {object} props - Component props
 */
const Contact = () => {
  return (
    <ScrollAnimation animateIn='fade-in-left' animateOnce={true} offset={50}>
      <div id='contact' className='mb-5'>
        <h2 className='text-center text-primary mb-4 title'>Contacto</h2>
        <Row>
          <Col className='email-container mb-3 mb-lg-0' lg={6}>
            <a
              href={email.href}
              className='btn email-button d-none d-lg-block h-100'
            >
              <FontAwesomeIcon className='email-icon' icon={faEnvelope} />
              Enviar correo
            </a>
            <div className='email p-2'>{email.label}</div>
          </Col>
          <Col lg={6}>
            <a
              href={github.href}
              target='_blank'
              rel='noopener noreferrer'
              className='btn w-100 h-100'
            >
              <FontAwesomeIcon className='email-icon' icon={faGithub} />
              {github.label}
            </a>
          </Col>
        </Row>
      </div>
    </ScrollAnimation>
  );
};

export default Contact;