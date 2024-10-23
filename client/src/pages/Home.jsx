
import { FaAppleAlt, FaCarrot, FaHeartbeat } from 'react-icons/fa'
import '../css/home.css' // Import the CSS file

const Home = () => {
  return (
    <div className="page-container">
      <div >
        <h1 className="title">Centre for Nutritional Healthcare</h1>
      </div>

      <p className="subtitle">
        Centre for Nutritional Healthcare delivers natural healthcare solutions that are sustainable, comprehensive, and restorative. We believe that perfect health can be achieved by modulating nutrition and lifestyle in an eco-friendly space.
      </p>

      <div className="icon-container">
        <div className="icon-wrapper">
          <div className="icon"><FaAppleAlt /></div>
          <p className="icon-text">Healthy Eating</p>
        </div>
        <div className="icon-wrapper">
          <div className="icon"><FaCarrot /></div>
          <p className="icon-text">Natural Solutions</p>
        </div>
        <div className="icon-wrapper">
          <div className="icon"><FaHeartbeat /></div>
          <p className="icon-text">Holistic Health</p>
        </div>
      </div>

     
    </div>
  )
}

export default Home
