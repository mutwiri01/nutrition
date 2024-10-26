import { useState } from "react";
import { FaUser, FaBuilding } from "react-icons/fa";
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const switchSection = (section) => {
    setActiveSection(activeSection === section ? "" : section);
    setSuccessMessage("");
    setError("");
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
    setLoading(true);
    setError("");
    setSuccessMessage("");

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
      setLoading(false);
    }
  };

  const handleCorporateFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

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
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <h1 className="title">Health Coaching</h1>

      <div className="card-container">
        <div
          className={`card ${activeSection === "personal" ? "active-card" : ""}`}
          onClick={() => switchSection("personal")}
        >
          <FaUser className="icon" />
          <h3>Personal Coaching</h3>
        </div>
        <div
          className={`card ${activeSection === "corporate" ? "active-card" : ""}`}
          onClick={() => switchSection("corporate")}
        >
          <FaBuilding className="icon" />
          <h3>Corporate Coaching</h3>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      {activeSection === "personal" && (
        <div className="section">
          <h2>Personal Health Coaching</h2>
          <p>
            Bio-individuality is a nutritional concept that recognizes the unique biological nature of every person.
          </p>
          <div className="form-container">
            <h2>Register with us</h2>
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
              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}

      {activeSection === "corporate" && (
        <div className="section">
          <h2>Corporate Health Coaching</h2>
          <p>A healthy workforce ensures higher productivity and well-being.</p>
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
              <button type="submit" className="submit-button" disabled={loading}>
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
