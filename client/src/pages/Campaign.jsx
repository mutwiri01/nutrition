
import '../css/Campaign.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faCarrot, faRunning } from '@fortawesome/free-solid-svg-icons'; 

const Campaign = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="page-container">
      <h1 className="title">Campaign for Healthy Communities</h1>
      <div className="grid">
        <div className="card">
          <FontAwesomeIcon icon={faBalanceScale} className="icon" />
          <h3 className="card-title">Food Justice</h3>
          <p>Promoting equal access to nutritious food for all.</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faCarrot} className="icon" />
          <h3 className="card-title">Food for Health</h3>
          <ul className="list">
            <li className="list-item">Nutrient harvest</li>
            <li className="list-item">Plant protein initiative</li>
            <li className="list-item">The national food plate</li>
            <li className="list-item">Water campaign</li>
          </ul>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faRunning} className="icon" />
          <h3 className="card-title">Physical Exercise</h3>
          <p>Encouraging active lifestyles for overall well-being.</p>
        </div>
      </div>

      {/* New Section for Food Justice Text */}
      <div className="food-justice-section">
        <h2>Why Food Justice Matters</h2>
        <p>
          We cannot eliminate the prevailing global threats to human health without addressing the critical component of Food Justice.
        </p>
        <p>
          Proponents of food justice advocate for universal access to nutritious, affordable, healthy, and sustainable food as a human right.
        </p>
        <p>
          In the quest to meet demand, global food production and processing systems have sidelined nutritional value to prioritize food security. This has led to the emergence of a new food culture around the world that consists of high-calorie but low-nutrient diets. These foods cause nutrient deficiency in the body and trigger disease.
        </p>
        <p>
          The use of pesticides and chemical fertilizers in farms, as well as genetic modification of food organisms with the aim of maximizing yields, has resulted in heavily contaminated food on our plates. These chemicals directly cause diseases associated with severe organ damage, endocrine disruption, and cellular malfunction.
        </p>
        <p>
          In its wake, unprecedented environmental degradation has occurred, especially in food ecosystems, leading to food insecurity.
        </p>
        <p>
          Today, every household is exposed to food that contains copious amounts of chemical residue which, when consumed, disrupts vital biochemical processes in the body. The meteoric rise in chronic degenerative diseases in our society traces its origin to the foregoing.
        </p>
        <p>
          Add this to the popular consumption of chemically processed food, easily accessible to the majority of consumers, and you have a recipe for disaster.
        </p>
        <h3>Why is food justice important?</h3>
        <p>
          Food is the primary source of life support and health maintenance. Its quality and safety therefore define its capability to perform these functions. When food doesn’t meet these standards, it becomes toxic and sets off the body on the path to disease.
        </p>
        <p>
          Consumers hardly comprehend this delicate but crucial balance and have become victims of the food environment that they find themselves in to sustain their lives.
        </p>
        <p>
          Food justice is a response to the serious issues that face food production and public health. Every government should protect its citizens from food and food production systems that endanger their lives and ensure they consume nutritious diets that sustain their health.
        </p>
      </div>

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
