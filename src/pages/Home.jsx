import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection'
import CustomerReviews from './CustomerReviews';
import Products from './Products';

const Home = () => {
  return (
   <>
    <HeroSection/>
   <Products/>
   <CustomerReviews/>
   <Footer/>
   </>

  );
};

export default Home;
