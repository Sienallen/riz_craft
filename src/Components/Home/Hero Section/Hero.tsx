import './Hero.css';
import CoverFlower from '../../../assets/Cover_Flowers.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <img src={CoverFlower} alt="CoverFlower" />

      <div className="hero-card">
        <h2>Made With Love</h2>
        <p>Products were hand-crafted and carefully made</p>
        <Link to="/shopPage" className="gold-button shop-now">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
