import React, { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Home: FC = () => {
  return (
    <ScrollAnimation
      animateIn='animate__fadeInDown'
      animateOnce={true}
      delay={1200}
    >
      <div className='home'>
        <div id='home' className='fake-header' />
        <h2 className='display-4 text-primary'>Hola, mi nombre es</h2>
        <h1 className='display-2 font-weight-bold name-title'>
          Alejandro Suárez
        </h1>
        <h5 className='text-info text-right'>
          Tecnólogo en Desarrollo de Software
        </h5>
      </div>
    </ScrollAnimation>
  );
};

export default Home;
