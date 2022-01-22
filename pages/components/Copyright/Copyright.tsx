import React, { FC } from 'react';

const Copyright: FC = () => {
  // Get current year
  const year = new Date().getFullYear();

  return (
    <div className='d-flex justify-content-center align-items-center text-center pb-3'>
      <p>
        Copyright © {year} Alejandro Suárez | Compilado y publicado con{' '}
        <a
          className='text-info'
          href='https://www.netlify.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Netlify
        </a>
      </p>
    </div>
  );
};

export default Copyright;
