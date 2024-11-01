import { FaAppleAlt, FaCarrot, FaHeartbeat } from 'react-icons/fa';
import '../css/home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">


      <p className="home-subtitle">
        Centre for Nutritional Healthcare delivers natural healthcare solutions that are sustainable, comprehensive, and restorative.  Our contribution to better health is guided by modulating nutrition and lifestyles within communities and restoring ecosystems to sustain and prolong lives.
      </p>

      <div className="home-icon-container">
        <div className="home-icon-wrapper">
          <div className="home-icon"><FaAppleAlt /></div>
          <p className="home-icon-text">Redefine healthcare </p>
        </div>
        <div className="home-icon-wrapper">
          <div className="home-icon"><FaHeartbeat /></div>
          <p className="home-icon-text">Transform lifestyles </p>
        </div>
        <div className="home-icon-wrapper">
          <div className="home-icon">< FaCarrot/></div>
          <p className="home-icon-text">Restore ecosystems</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
