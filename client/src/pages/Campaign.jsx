import { useState } from "react";
import { FaBalanceScale, FaCarrot, FaRunning } from "react-icons/fa";
import PropTypes from "prop-types";
import "../css/Campaign.css";

// Modal Component
const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const Campaign = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNutrientModal, setShowNutrientModal] = useState(false);
  const [showProteinModal, setShowProteinModal] = useState(false);
  const [showPlateModal, setShowPlateModal] = useState(false);
  const [showWaterModal, setShowWaterModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="page-container">
      <h1 className="title">Campaign for Healthy Communities</h1>
      <div className="grid">
        <div className="card" onClick={() => setShowModal(true)}>
          <div className="icon">
            <FaBalanceScale />
          </div>
          <h3 className="card-title">Food Justice</h3>
          <p>Promoting equal access to nutritious food for all.</p>
        </div>
        <div className="card">
          <div className="icon">
            <FaCarrot />
          </div>
          <h3 className="card-title">Food for Health</h3>
          <ul className="list">
            <li
              className="list-item"
              onClick={() => setShowNutrientModal(true)}
            >
              Nutrient Harvest
            </li>
            <li className="list-item" onClick={() => setShowProteinModal(true)}>
              Plant Protein Initiative
            </li>
            <li className="list-item" onClick={() => setShowPlateModal(true)}>
              The National Food Plate
            </li>
            <li className="list-item" onClick={() => setShowWaterModal(true)}>
              Water Campaign
            </li>
          </ul>
        </div>
        
      </div>

      {/* Food Justice Modal */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2>FOOD JUSTICE</h2>
        <p>
          <strong>
            "We cannot eliminate the prevailing global threats to human health
            without addressing the critical component of Food Justice"
          </strong>
        </p>
        <p>
          Proponents of food justice advocate for universal access to
          nutritious, affordable, healthy, and sustainable food as a human
          right.
        </p>
        <p>
          In the quest to meet demand, global food production and processing
          systems have sidelined nutritional value to prioritize food security.
          This has led to the emergence of a new food culture around the world
          that consists of high-calorie but low-nutrient diets. These foods
          cause nutrient deficiency in the body and trigger disease.
        </p>
        <p>
          The use of pesticides and chemical fertilizers in farming, as well as
          genetic modification of food organisms with the singular aim of
          maximizing yields, has resulted in heavily contaminated food on our
          plates. These chemicals directly cause diseases associated with severe
          organ damage, endocrine disruption, and cellular malfunction.
        </p>
        <p>
          In its wake, unprecedented environmental degradation has occurred,
          especially in food ecosystems, leading to food insecurity.
        </p>
        <p>
          Today, every household is exposed to food that contains copious
          amounts of chemical residue which, when consumed, disrupts vital
          biochemical processes in the body. The meteoric rise in chronic
          degenerative diseases in our society today traces its origin to the
          foregoing.
        </p>
        <p>
          Add this to the popular consumption of chemically processed food,
          easily accessible to the majority of consumers, and you have a recipe
          for disaster.
        </p>
        <h3>Why is food justice important?</h3>
        <p>
          Food is the primary source of life support and health maintenance. Its
          quality and safety, therefore, define its capability to perform these
          functions. When food doesn't measure up to these standards, it becomes
          toxic and sets off the body on the path to disease.
        </p>
        <p>
          Consumers hardly comprehend this delicate but crucial balance and have
          become victims of the food environment that they find themselves in to
          sustain their lives.
        </p>
        <p>
          Food justice is a response to the serious issues that face food
          production and public health. Every government should protect its
          citizens from food and food production systems that endanger their
          lives and ensure they consume nutritious diets that sustain their
          health.
        </p>
      </Modal>

      {/* Nutrient Harvest Modal */}
      <Modal
        show={showNutrientModal}
        onClose={() => setShowNutrientModal(false)}
      >
        <h2>Nutrient Deficiency</h2>
        <p>
          NUTRIENT DEFICIENCY - THE COMMON DENOMINATOR FOR DEGENERATIVE AILMENTS
          "Let us build a culture of nutrient-rich diets as a vital pillar for
          preventive health" According to dictionary.com, to nourish is to
          supply with what is necessary for life, health, and growth; to
          cherish, foster, keep alive; and to strengthen, build up, or promote.
          Nourishment is the basic value of food to the body and this value is
          measured in nutrients. Nutrients enable the body to perform all its
          biological functions so as to maintain homeostasis. In summary the
          body needs nutrients to run metabolic processes so as to generate and
          circulate energy to sustain life and growth and maintain health
          through a complex bio-system. Without nutrients, these vital processes
          are compromised and lead to systemic breakdowns resulting in disease.
          With the shift in dietary lifestyles inspired by commercial food
          chains, in modern living, high nutrient diets have been compromised
          for "better tasting and convenient" but low nutrient diet. Sustained
          consumption of these foods results in deficit of vitamins and minerals
          leading to nutrient deficiency, the main cause of rampant lifestyle
          disease burden currently sweeping through our societies. The response
          to this calamity has not been effective as the healthcare system
          focuses on treating symptoms of associated diseases rather than the
          root causes. There is urgent need for a change of approach in
          addressing this malignant challenge and adoption of sustainable and
          comprehensive interventions to roll back the trend. As scientific
          evidence presents, proper biological body function can be.maintained
          by a sufficient supply of nutrients which are readily available from
          healthy food. Going forward, attention needs to shift to nutrient
          extraction as a function of nutrition.
        </p>
      </Modal>

      {/* Plant Protein Initiative Modal */}
      <Modal show={showProteinModal} onClose={() => setShowProteinModal(false)}>
        <h2>Plant Protein Initiative</h2>
        <p>
          Exploring the shift towards plant-based protein sources and their
          benefits...
        </p>
      </Modal>

      {/* The National Food Plate Modal */}
      <Modal show={showPlateModal} onClose={() => setShowPlateModal(false)}>
        <h2>The National Food Plate</h2>
        <p>
          An initiative to educate people on balanced dietary choices through
          the National Food Plate guide...
        </p>
      </Modal>

      {/* Water Campaign Modal */}
      <Modal show={showWaterModal} onClose={() => setShowWaterModal(false)}>
        <h2>Water Campaign</h2>
        <p>
          Highlighting the importance of water for health and sustainable
          consumption practices...
        </p>
      </Modal>

      <form className="form" onSubmit={handleSubmit}>
        <h2>Participation Application Form</h2>
        <input type="text" className="input" placeholder="Full Name" required />
        <input type="email" className="input" placeholder="Email" required />
        <input type="tel" className="input" placeholder="Phone Number" />
        <textarea
          className="textarea"
          placeholder="Why do you want to participate in our campaign?"
          rows="4"
          required
        ></textarea>
        <button type="submit" className="button">
          Apply to Participate
        </button>
      </form>
    </div>
  );
};

export default Campaign;
