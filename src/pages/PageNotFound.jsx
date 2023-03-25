import Header from '../components/Header';
import Error404 from '../components/Error404';
import Footer from '../components/Footer';

function PageNotFound() {
  return (
    <div className="404-page">
      <Header />
      <Error404 />
      <Footer />
    </div>
  );
}

export default PageNotFound;
