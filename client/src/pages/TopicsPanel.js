// TopicsPanel.js

import "../css/topicsPanel.css"; // Import CSS specific to this component

const TopicsPanel = ({ handleLinkClick }) => {
  return (
    <div className="side-panel">
      <h3>Topics</h3>
      <ul>
        <li onClick={() => handleLinkClick("NUTRIENT DEFICIENCY")}>
          Nutrient Deficiency
        </li>
        <li onClick={() => handleLinkClick("Strategies For Alternative Healthcare")}>
          Strategies For Alternative Healthcare
        </li>
        <li onClick={() => handleLinkClick("High Nutrient Diets Lead To Healthier Productive Communities")}>
          High Nutrient Diets
        </li>
        <li onClick={() => handleLinkClick("Organic Diet Is Key To Restorative Health")}>
          Organic Diet
        </li>
      </ul>
    </div>
  );
};

export default TopicsPanel;
