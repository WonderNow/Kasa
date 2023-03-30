import React from 'react';
import Header from '../components/Header';
import Error404 from '../components/Error404';
import Footer from '../components/Footer';

function PageNotFound() {
  return (
    <React.Fragment>
      <Header />
      <Error404 />
      <Footer />
    </React.Fragment>
  );
}

export default PageNotFound;
