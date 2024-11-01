import { useState } from 'react';
import '../css/ResourceCenter.css';
import { FaBook, FaLeaf, FaHeartbeat, FaTint, FaAppleAlt, FaSeedling } from 'react-icons/fa';

const topics = [
  { 
    id: 'nutrition', 
    title: 'High Nutrient Diets Lead To Healthier Productive Communities', 
    icon: <FaLeaf />,
    content: (
      <>
        <p>The growing demand for low-nutrient, highly addictive processed foods, preferred for their taste, poses one of the biggest health challenges of modern society.</p>
        <p>The commercialization of the food chain in the 20th century led to mechanized processing and chemical-based preservation, prioritizing taste over nutrient quality and safety. This has led to widespread reliance on artificial sweeteners and low-nutrient diets.</p>
        <p>Today, over 90% of the global disease burden is linked to consumption of low-nutrient, high-calorie foods. Governments, however, are slow to regulate these artificial food industries, leading to increased consumer risk.</p>
        <p>The Centre for Nutritional Healthcare offers tools to empower consumers, enabling healthier choices and fostering independence in pursuing health.</p>
      </>
    )
  },
  { 
    id: 'deficiency', 
    title: 'Nutrient Deficiency - The Common Denominator for Degenerative Ailments', 
    icon: <FaHeartbeat />,
    content: (
      <>
        <p>"Let us build a culture of nutrient-rich diets as a vital pillar for preventive health."</p>
        <p>Nourishment is essential for the body to maintain health and growth, driven by essential nutrients that support vital functions. Modern diets, however, compromise these nutrients for taste and convenience.</p>
        <p>Sustained consumption of low-nutrient foods leads to nutrient deficiencies, which fuel lifestyle diseases that plague society today.</p>
        <p>The Centre for Nutritional Healthcare promotes sustainable interventions focused on nutrient-rich diets to maintain healthy body function and reverse disease trends.</p>
      </>
    )
  },
  { 
    id: 'strategies', 
    title: 'Strategies For Alternative Healthcare', 
    icon: <FaTint />,
    content: (
      <>
        <p>Conventional healthcare often depends on pharmaceuticals, but alternative approaches now offer safer, non-invasive solutions to lifestyle health conditions.</p>
        <p>This method redefines individual lifestyles to encourage natural health, minimize pharmaceutical side effects, and reduce health downtimes.</p>
        <p>The Centre for Nutritional Healthcare provides a revolutionary alternative care approach aimed at promoting health through natural methods.</p>
      </>
    )
  },
  { 
    id: 'justice', 
    title: 'Food Justice', 
    icon: <FaAppleAlt />,
    content: (
      <>
        <p>"We cannot eliminate the prevailing global threats to human health without addressing Food Justice."</p>
        <p>Food justice advocates for universal access to nutritious, affordable, and sustainable food as a basic human right, contrasting with modern food systems focused on quantity over quality.</p>
        <p>Today’s food production heavily relies on chemicals, leading to nutrient deficiency and chronic diseases. Food justice addresses these issues by promoting the safety and quality of our food sources.</p>
      </>
    )
  },
  { 
    id: 'organic', 
    title: 'Organic Diet Is Key To Restorative Health', 
    icon: <FaSeedling />,
    content: (
      <>
        <p>"We must make deliberate efforts to restore the ecosystem to reverse the disease pandemic."</p>
        <p>Scientific studies highlight the benefits of organic diets, linking them to robust health and longevity. The Centre for Nutritional Healthcare promotes organic food consumption to combat diseases caused by artificial food additives.</p>
        <p>Restoring natural ecosystems and promoting organic food production are essential to achieving lasting health for society.</p>
      </>
    )
  },
];

const ResourceCenter = () => {
  const [showTopics, setShowTopics] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const handleClose = () => {
    setSelectedTopic(null);
    setShowTopics(false);
  };

  return (
    <div className="PageContainer">
      <h1 className="Title">Resource Center</h1>
      <div className="Grid">
        <div className="Card" onClick={() => setShowTopics(true)}>
          <div className="Icon"><FaBook /></div>
          <h3 className="CardTitle">E-Books and Articles</h3>
          <p>Access our library of resources on nutrition, health, and sustainable living.</p>
        </div>
      </div>

      {showTopics && !selectedTopic && (
        <div className="TopicsList">
          <h2>Topics</h2>
          <ul>
            {topics.map(topic => (
              <li 
                key={topic.id} 
                onClick={() => handleTopicClick(topic)}
                style={{ color: selectedTopic?.id === topic.id ? '#4CAF50' : '#000' }}
              >
                <span className="TopicIcon">{topic.icon}</span> {topic.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedTopic && (
        <div className="TopicContent">
          <h3>{selectedTopic.title}</h3>
          <div className="ContentText">{selectedTopic.content}</div>
          <button className="CloseButton" onClick={handleClose}>Close</button>
        </div>
      )}

      <div className="JoinSection">
        <h2 className="JoinTitle">Join Our Community</h2>
        <p className="JoinDescription">Become a member of our community and gain access to exclusive resources.</p>
        <button className="Button">Join Now</button>
      </div>
    </div>
  );
};

export default ResourceCenter;
