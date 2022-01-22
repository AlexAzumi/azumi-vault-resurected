import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col } from 'react-bootstrap';
// Data
import data from '../../../data/about';

/**
 * About component
 * @param {object} props - Component props
 */
const About = () => {
  return (
    <ScrollAnimation
      animateIn='fade-in-left'
      animateOnce={true}
      animatePreScroll={false}
    >
      <div className='mb-5'>
        <div id='about' className='fake-header' />
        <h2 className='text-center text-primary mb-4 title'>Sobre mí</h2>
        <Row>
          {/* Picture */}
          <Col className='mb-3 mb-md-0' md={4}>
            <img className='img-fluid rounded' src='/images/profile.jpg' />
          </Col>
          {/* Information */}
          <Col md={8}>
            <p className='text-justify'>
              ¡Hola!, mi nombre es Alejandro Suárez, soy tecnólogo en desarrollo
              de software egresado de <b>CETI plantel Tonalá</b>. Actualmente
              estudio Ingeniería en Computación en el Centro Universitario de
              Ciencias Exactas e Ingenierías (CUCEI) de la{' '}
              <b>Universidad de Guadalajara</b>.
            </p>
            <p className='text-justify'>
              Desde jóven me he interesado en la tecnología, empezando a
              programar desde los 8 años pero no tomé seriamente esto hasta los
              14.
            </p>
            <p className='text-justify'>
              Aquí hay un listado de las tecnologías y herramientas que he usado
              últimamente:
            </p>
            {/* Technologies */}
            <Row>
              {data.technologies.map((item, index) => {
                return (
                  <Col key={`techonoly-${index}`} xs={6}>
                    <li>{item}</li>
                  </Col>
                );
              })}
            </Row>
            {/* Location */}
            <p className='text-info text-right'>Tonalá, Jalisco</p>
          </Col>
        </Row>
      </div>
    </ScrollAnimation>
  );
};

export default About;
