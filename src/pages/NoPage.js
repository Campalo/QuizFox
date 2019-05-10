import React from 'react';
import Navbar2 from '../components/globalComponents/Navbar2';

const NoPage = () => {
  return (
    <div>
      <Navbar2 />
      <h1>You're way too far!</h1>
      <section className="noPage" />
    </div>
  );
};

export default NoPage;
