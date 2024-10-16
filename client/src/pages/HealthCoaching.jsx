import { useState } from 'react';
import '../css/healthcoaching.css';
import coaching from '../assets/c1.jpg';

const HealthCoaching = () => {
  const [activeSection, setActiveSection] = useState('personal');

  const switchSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="page-container">
      {/* Image at the top */}
      <img src={coaching} alt="Health Coaching" className="image" />

      <h1 className="title">Health Coaching</h1>

      {/* Toggle buttons */}
      <div className="toggle-buttons">
        <button 
          className={`button ${activeSection === 'personal' ? 'active' : ''}`} 
          onClick={() => switchSection('personal')}>
          Personal Coaching
        </button>
        <button 
          className={`button ${activeSection === 'corporate' ? 'active' : ''}`} 
          onClick={() => switchSection('corporate')}>
          Corporate Coaching
        </button>
      </div>

      {/* Section content */}
      {activeSection === 'personal' ? (
        <div className="section">
          <h2>Personal Health Coaching</h2>
          <p>
            Bio-individuality is a nutritional concept that recognizes and respects the unique biological nature of every person. The human genome dictates that no two persons may possess the same biological identity and therefore our bodies are tuned to respond variously to similar stimuli.
          </p>
          <p>
            In dealing with the body's response to homeostatic threats, it is imperative to understand and respect this principle so as to assign respective and effective interventions.
          </p>
          <p>
            Centre for Nutritional Healthcare offers individual health coaching programs tailored to help you overcome health threats and challenges through behavior and lifestyle change. These programs will address primary and secondary food as stimulants for change in the body.
          </p>

          {/* Health History Form */}
          <div className="form-container">
            <h2>Health History Form</h2>
            <form className="form">
              <input type="text" placeholder="Full Name" className="input" required />
              <input type="email" placeholder="Email" className="input" required />
              <input type="tel" placeholder="Phone Number" className="input" />
              <textarea placeholder="Describe your current health concerns and goals" rows="5" className="textarea" required />
              <button type="submit" className="submit-button">Submit Health History</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="section">
          <h2>Corporate Health Coaching</h2>
          <p>
            A healthy workforce is a guarantee for higher human resource output. Today’s busy and hectic occupational space exposes workers to onset of various risk factors for morbidity. This phenomenon undermines the overall productivity of any organization and erodes profits.
          </p>
          <p>
            Lack of mechanisms to monitor and check this phenomenon leads to general indisposition of the workforce and decreased individual productivity levels in the workplace.
          </p>
          <p>
            Added to this is the prevalent unhealthy lifestyles mainly influenced by poor dietary practices that lead to diseases.
          </p>
          <p>
            There exists an urgent need to develop coping mechanisms for these emerging challenges that every organization should embrace.
          </p>
          <p>
            Centre for Nutritional Healthcare (CNH) offers intervention programs that help plug the drain in corporate profits year after year. The programs restore energy and confidence in the workplaces and help staff redefine their lifestyles for healthier, productive living.
          </p>

          {/* Corporate Coaching Application Form */}
          <div className="form-container">
            <h2>Corporate Coaching Application</h2>
            <form className="form">
              <input type="text" placeholder="Organization Name" className="input" required />
              <input type="number" placeholder="Number of Members" className="input" required />
              <select className="input" required>
                <option value="">Select Program Features</option>
                <option value="Nutrition Workshops">Nutrition Workshops</option>
                <option value="Fitness Programs">Fitness Programs</option>
                <option value="Stress Management">Stress Management</option>
                <option value="Health Checkups">Health Checkups</option>
              </select>
              <button type="submit" className="submit-button">Apply for Corporate Coaching</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthCoaching;
