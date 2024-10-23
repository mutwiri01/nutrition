import { useState } from 'react';
import '../css/Campaign.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faCarrot } from '@fortawesome/free-solid-svg-icons';

const Campaign = () => {
  const [showFoodJustice, setShowFoodJustice] = useState(false);
  const [showFoodHealth, setShowFoodHealth] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const toggleFoodJustice = () => {
    setShowFoodJustice(!showFoodJustice);
  };

  const toggleFoodHealth = () => {
    setShowFoodHealth(!showFoodHealth);
  };

  return (
    <div className="page-container">
      <h1 className="title">Campaign for Healthy Communities</h1>
      <div className="grid">
        <div className="card" onClick={toggleFoodJustice}>
          <FontAwesomeIcon icon={faBalanceScale} className="icon" />
          <h3 className="card-title">Food Justice</h3>
          <p>Promoting equal access to nutritious food for all.</p>
        </div>
        <div className="card" onClick={toggleFoodHealth}>
          <FontAwesomeIcon icon={faCarrot} className="icon" />
          <h3 className="card-title">Food for Health</h3>
          <p>Click to learn more about nutrient deficiency and its impact on health.</p>
        </div>
      </div>

      {/* Conditionally render the Food Justice section based on state */}
      {showFoodJustice && (
        <div className="food-justice-section">
          <h2>Why Food Justice Matters</h2>
          <p>
            We cannot eliminate the prevailing global threats to human health without addressing the critical component of Food Justice.
          </p>
          <p>
            Proponents of food justice advocate for universal access to nutritious, affordable, healthy, and sustainable food as a human right.
          </p>
          <p>
            In the quest to meet demand, global food production and processing systems have sidelined nutritional value to prioritize food security...
          </p>
          <h3>Why is food justice important?</h3>
          <p>
            Food is the primary source of life support and health maintenance. Its quality and safety therefore define its capability to perform these functions.
          </p>
        </div>
      )}

      {/* Conditionally render the Food for Health section based on state */}
      {showFoodHealth && (
        <div className="food-health-section">
          <h4>Nutrient Deficiency - The Common Denominator for Degenerative Ailments</h4>
          <p>"Let us build a culture of nutrient-rich diets as a vital pillar for preventive health."</p>
          <p>According to dictionary.com, to nourish is to supply with what is necessary for life, health, and growth; to cherish, foster, keep alive; and to strengthen, build up, or promote.</p>
          <p>Nourishment is the basic value of food to the body and this value is measured in nutrients. Nutrients enable the body to perform all its biological functions so as to maintain homeostasis.</p>
          <p>In summary, the body needs nutrients to run metabolic processes so as to generate and circulate energy to sustain life and growth and maintain health through a complex bio-system.</p>
          <p>Without nutrients, these vital processes are compromised and lead to systemic breakdowns resulting in disease.</p>
          <p>With the shift in dietary lifestyles inspired by commercial food chains, in modern living, high nutrient diets have been compromised for "better tasting and convenient" but low nutrient diets.</p>
          <p>Sustained consumption of these foods results in a deficit of vitamins and minerals, leading to nutrient deficiency—the main cause of rampant lifestyle disease burden currently sweeping through our societies.</p>
          <p>The response to this calamity has not been effective as the healthcare system focuses on treating symptoms of associated diseases rather than the root causes.</p>
          <p>There is urgent need for a change of approach in addressing this malignant challenge and adoption of sustainable and comprehensive interventions to roll back the trend.</p>
          <p>As scientific evidence presents, proper biological body function can be maintained by a sufficient supply of nutrients which are readily available from healthy food. Going forward, attention needs to shift to nutrient extraction as a function of nutrition.</p>
          <p>At the Centre for Nutritional Healthcare, we believe that broad-based and sustainable interventions offer better chances of solving these complex problems.</p>
        </div>
      )}

      <form className="form" onSubmit={handleSubmit}>
        <h2>Participation Application Form</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone Number" />
        <textarea placeholder="Why do you want to participate in our campaign?" rows="4" required />
        <button type="submit">Apply to Participate</button>
      </form>
    </div>
  );
};

export default Campaign;
