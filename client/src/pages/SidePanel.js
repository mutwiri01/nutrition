import '../css/sidePanel.css';

const SidePanel = ({ onLinkClick }) => {
  return (
    <div className="side-panel">
      <h3>Topics</h3>
      <ul>
        <li onClick={() => onLinkClick("NUTRIENT DEFICIENCY")}>
          Nutrient Deficiency
        </li>
        <li onClick={() => onLinkClick("Strategies For Alternative Healthcare")}>
          Strategies For Alternative Healthcare
        </li>
        <li
          onClick={() =>
            onLinkClick("High Nutrient Diets Lead To Healthier Productive Communities")
          }
        >
          High Nutrient Diets
        </li>
        <li onClick={() => onLinkClick("Organic Diet Is Key To Restorative Health")}>
          Organic Diet
        </li>
      </ul>
    </div>
  );
};

export default SidePanel;
