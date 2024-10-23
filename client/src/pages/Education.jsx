import { useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaLeaf,
  FaHeartbeat,
} from "react-icons/fa";
import "../css/education.css";

const Education = () => {
  const [activeSection, setActiveSection] = useState("lifestyle");
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Modal content mapping
  const contentMap = {
    "NUTRIENT DEFICIENCY": (
      <div>
        <h2>NUTRIENT DEFICIENCY</h2>
        <p>"Let us build a culture of nutrient-rich diets as a vital pillar for preventive health."</p>
        <p>According to dictionary.com, to nourish is to supply with what is necessary for life, health, and growth...</p>
        {/* More content here */}
      </div>
    ),
    "Strategies For Alternative Healthcare": (
      <div>
        <h2>Strategies For Alternative Healthcare</h2>
        <p>Conventional healthcare relies on pharmaceutical medicine to manage diseases. However, new scientific research findings...</p>
        {/* More content here */}
      </div>
    ),
    "High Nutrient Diets Lead To Healthier Productive Communities": (
      <div>
        <h2>High Nutrient Diets Lead To Healthier Productive Communities</h2>
        <p>The growing demand for low nutrient, highly addictive processed foods poses one of the biggest health challenges...</p>
        {/* More content here */}
      </div>
    ),
    "Organic Diet Is Key To Restorative Health": (
      <div>
        <h2>Organic Diet Is Key To Restorative Health</h2>
        <p>"We must make deliberate efforts to restore the ecosystem as a primary measure to reverse the disease pandemic."</p>
        <p>Industrial food production and processing is today the biggest threat to human health...</p>
        {/* More content here */}
      </div>
    ),
  };

  const handleLinkClick = (topic) => {
    setModalContent(contentMap[topic]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="education-page">
      <div className="page-container">
        <div className="main-content">
          {/* Button Grid */}
          <div className="button-grid">
            <button
              className={`button ${activeSection === "lifestyle" ? "active" : ""}`}
              onClick={() => setActiveSection("lifestyle")}
            >
              <FaHeartbeat className="button-icon" />
              Lifestyle and Health
            </button>
            <button
              className={`button ${activeSection === "environment" ? "active" : ""}`}
              onClick={() => setActiveSection("environment")}
            >
              <FaLeaf className="button-icon" />
              Environment and Nutrition
            </button>
            <button
              className={`button ${activeSection === "productivity" ? "active" : ""}`}
              onClick={() => setActiveSection("productivity")}
            >
              <FaBriefcase className="button-icon" />
              Productivity in Occupation
            </button>
            <button
              className={`button ${activeSection === "health-freedom" ? "active" : ""}`}
              onClick={() => setActiveSection("health-freedom")}
            >
              <FaGraduationCap className="button-icon" />
              Health Freedom
            </button>
          </div>

          {/* Section Content */}
          <div className="section-content">
            {activeSection === "lifestyle" && (
              <div className="content">
                <h2>Lifestyle and Health</h2>
                <ul>
                  <li>Advocacy For Preventive Health</li>
                  <li>Strategies For Alternative Healthcare</li>
                  <li>High Nutrient Diets Lead To Healthier Productive Communities</li>
                </ul>
              </div>
            )}
            {activeSection === "environment" && (
              <div className="content">
                <h2>Environment and Nutrition</h2>
                <p>Organic Diet Is Key To Restorative Health</p>
              </div>
            )}
            {activeSection === "productivity" && (
              <div className="content">
                <h2>Productivity in Occupation</h2>
                <p>Enhancing workplace wellness and efficiency through nutrition.</p>
              </div>
            )}
            {activeSection === "health-freedom" && (
              <div className="content">
                <h2>Health Freedom</h2>
                <p>Empowering individuals with knowledge for informed health decisions.</p>
              </div>
            )}
          </div>

          {/* Form */}
          <form className="form" onSubmit={handleSubmit}>
            <h2>Application Form</h2>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="Company (if applicable)" />
            <button type="submit" className="submit-button">
              Apply for Education Program
            </button>
          </form>
        </div>

        {/* Side Panel */}
        <div className="side-panel">
          <h3>Topics</h3>
          <ul>
            <li onClick={() => handleLinkClick("NUTRIENT DEFICIENCY")}>Nutrient Deficiency</li>
            <li onClick={() => handleLinkClick("Strategies For Alternative Healthcare")}>Strategies For Alternative Healthcare</li>
            <li onClick={() => handleLinkClick("High Nutrient Diets Lead To Healthier Productive Communities")}>High Nutrient Diets</li>
            <li onClick={() => handleLinkClick("Organic Diet Is Key To Restorative Health")}>Organic Diet</li>
          </ul>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={handleCloseModal}>
                &times;
              </span>
              {modalContent}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
