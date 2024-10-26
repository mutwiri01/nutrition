import { useState } from "react";
import { FaUser, FaBuilding } from "react-icons/fa"; // Import icons
import "../css/healthcoaching.css";

const HealthCoaching = () => {
  const [activeSection, setActiveSection] = useState("");
  const [personalFormData, setPersonalFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    healthConcerns: "",
  });
  const [corporateFormData, setCorporateFormData] = useState({
    organizationName: "",
    numberOfMembers: "",
    programFeatures: "",
  });
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message
  const [successMessage, setSuccessMessage] = useState(""); // Success message

  const switchSection = (section) => {
    setActiveSection(activeSection === section ? "" : section);
    setSuccessMessage(""); // Clear success message on section switch
    setError(""); // Clear error message on section switch
  };

  const handlePersonalInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalFormData({ ...personalFormData, [name]: value });
  };

  const handleCorporateInputChange = (e) => {
    const { name, value } = e.target;
    setCorporateFormData({ ...corporateFormData, [name]: value });
  };

  const handlePersonalFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(""); // Clear previous error
    setSuccessMessage(""); // Clear previous success message

    try {
      const response = await fetch(
        "https://cloudnutri.vercel.app/api/forms/personal",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(personalFormData),
        }
      );

      if (response.ok) {
        setSuccessMessage("Personal coaching data submitted successfully!");
        setPersonalFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          healthConcerns: "",
        });
      } else {
        const errorData = await response.json();
        setError(`Error: ${errorData.message || "Unable to submit data"}`);
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleCorporateFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(""); // Clear previous error
    setSuccessMessage(""); // Clear previous success message

    try {
      const response = await fetch(
        "https://cloudnutri.vercel.app/api/forms/corporate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(corporateFormData),
        }
      );

      if (response.ok) {
        setSuccessMessage("Corporate coaching data submitted successfully!");
        setCorporateFormData({
          organizationName: "",
          numberOfMembers: "",
          programFeatures: "",
        });
      } else {
        const errorData = await response.json();
        setError(`Error: ${errorData.message || "Unable to submit data"}`);
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="page-container">
      <h1 className="title">Health Coaching</h1>

      {/* Coaching Type Cards */}
      <div className="card-container">
        <div
          className={`card ${
            activeSection === "personal" ? "active-card" : ""
          }`}
          onClick={() => switchSection("personal")}
        >
          <FaUser className="icon" />
          <h3>Personal Coaching</h3>
        </div>
        <div
          className={`card ${
            activeSection === "corporate" ? "active-card" : ""
          }`}
          onClick={() => switchSection("corporate")}
        >
          <FaBuilding className="icon" />
          <h3>Corporate Coaching</h3>
        </div>
      </div>

      {/* Error or Success Message */}
      {error && <div className="error-message">{error}</div>}
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}

      {/* Section Content */}
      {activeSection === "personal" && (
        <div className="section">
          <h2>Personal Health Coaching</h2>
          <p>
            Bio-individuality is a nutritional concept that recognizes and
            respects the unique biological nature of every person. The human
            genome dictates that no two persons may possess the same biological
            identity and therefore our bodies are tuned to respond variously to
            similar stimuli.
          </p>
          <p>
            In dealing with the body's response to homeostatic threats, it is
            imperative to understand and respect this principle so as to assign
            respective and effective interventions.
          </p>
          Centre for Nutritional Healthcare offers individual health coaching
          programs tailored to help you overcome health threats and challenges
          through behavior and lifestyle change. These programs will address
          primary and secondary food as stimulants for change in the body.
          <p></p>
          <div className="form-container">
            <h2>Please use the form below to  register with us</h2>
            <form className="form" onSubmit={handlePersonalFormSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="input"
                value={personalFormData.fullName}
                onChange={handlePersonalInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
                value={personalFormData.email}
                onChange={handlePersonalInputChange}
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                className="input"
                value={personalFormData.phoneNumber}
                onChange={handlePersonalInputChange}
              />
              <textarea
                name="healthConcerns"
                placeholder="Describe your health concerns and goals"
                rows="5"
                className="textarea"
                value={personalFormData.healthConcerns}
                onChange={handlePersonalInputChange}
                required
              />
              <button
                type="submit"
                className="submit-button"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}

      {activeSection === "corporate" && (
        <div className="section">
          <h2>Corporate Health Coaching</h2>
          <p>
            A healthy workforce is a guarantee for higher human resource output.
            Today's busy and hectic occupational space exposes workers to onset
            of various risk factors for morbidity. This phenomenon undermines
            the overall productivity of any organization and erodes profits.
          </p>
          <p>
            Lack of mechanisms to monitor and check this phenomenon leads to
            general indisposition of the workforce and decreased individual
            productivity levels in the workplace.
          </p>
          <p>
            Added to this is the prevalent unhealthy lifestyles mainly
            influenced by poor dietary practices that lead to diseases.{" "}
          </p>
          <p>
            There exists an urgent need to develop coping mechanisms for these
            emerging challenges that every organization should embrace.
          </p>
          <p>
            Centre for Nutritional Healthcare (CNH) offers intervention programs
            that help plug the drain in corporate profits year after year.
          </p>
          <p>
            The programs restore energy and confidence in the workplaces and
            help staff redefine their lifestyles for healthier, productive
            living.
          </p>
          <p>
            The interventions will address risk factors to health that lead to
            low performance and often occasion absence from duty. This is a
            win-win situation for both the employee and employer.
          </p>
          <div className="form-container">
            <h2>Corporate Coaching Application</h2>
            <form className="form" onSubmit={handleCorporateFormSubmit}>
              <input
                type="text"
                name="organizationName"
                placeholder="Organization Name"
                className="input"
                value={corporateFormData.organizationName}
                onChange={handleCorporateInputChange}
                required
              />
              <input
                type="number"
                name="numberOfMembers"
                placeholder="Number of Members"
                className="input"
                value={corporateFormData.numberOfMembers}
                onChange={handleCorporateInputChange}
                required
              />
              <select
                name="programFeatures"
                className="input"
                value={corporateFormData.programFeatures}
                onChange={handleCorporateInputChange}
                required
              >
                <option value="">Select Program Features</option>
                <option value="Nutrition Workshops">Nutrition Workshops</option>
                <option value="Fitness Programs">Fitness Programs</option>
                <option value="Stress Management">Stress Management</option>
                <option value="Health Checkups">Health Checkups</option>
              </select>
              <button
                type="submit"
                className="submit-button"
                disabled={loading}
              >
                {loading ? "Applying..." : "Apply for Corporate Coaching"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthCoaching;
