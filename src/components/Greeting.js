import React from 'react';

const Greeting = ({ name }) => {
  return (
    <>
      <p>
        Hi <b>{name || 'people'}</b>! It is now <b>{new Date().toDateString()}</b>.
      </p>
    </>
  );
};

export default Greeting;
