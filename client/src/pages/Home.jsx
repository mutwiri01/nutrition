import { FaAppleAlt, FaCarrot, FaHeartbeat } from 'react-icons/fa';
import '../css/home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">


      <p className="home-subtitle">
        Centre for Nutritional Healthcare delivers natural healthcare solutions that are sustainable, comprehensive, and restorative. We believe that perfect health can be achieved by modulating nutrition and lifestyle in an eco-friendly space.
      </p>

      <div className="home-icon-container">
        <div className="home-icon-wrapper">
          <div className="home-icon"><FaAppleAlt /></div>
          <p className="home-icon-text">Healthy Eating</p>
        </div>
        <div className="home-icon-wrapper">
          <div className="home-icon"><FaCarrot /></div>
          <p className="home-icon-text">Natural Solutions</p>
        </div>
        <div className="home-icon-wrapper">
          <div className="home-icon"><FaHeartbeat /></div>
          <p className="home-icon-text">Holistic Health</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
