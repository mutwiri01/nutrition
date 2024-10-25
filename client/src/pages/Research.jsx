import { useState } from 'react';
import { FaLeaf, FaHeartbeat, FaTint, FaAppleAlt, FaSeedling } from 'react-icons/fa';
import '../css/Research.css';

const topics = [
  { 
    id: 'nutrition', 
    title: 'High Nutrient Diets Lead To Healthier Productive Communities', 
    icon: <FaLeaf />,
    content: `The growing demand for low nutrient, highly addictive processed foods, preferred for their taste, poses one of the biggest health challenges of modern society.\n\nThe commercialization of the food chain at the turn of the 20th century led to mechanized food processing and chemical-based preservation methods to feed the fast-growing population.\n\nAs demand grew, market competition led to a focus on taste and addiction rather than quality and safety. This resulted in increased use of artificial food sweeteners and reduced attention to nutrient retention.\n\nUnfortunately, this narrative fit well with the socio-economic growth fueled by the industrial revolution that introduced fast-paced lives.\n\nIn the quest to maximize profits, the food industry pulled all stops to attract the unsuspecting and innocent consumer to these high-calorie foods.\n\nToday, 90% of the global disease burden is caused by the consumption of these low nutrient, high-calorie foods. Unfortunately, the government agenda globally is not keen on regulating the artificial food industry in favor of the consumer, as this would disrupt trade dynamics and upset the much-needed revenue flow.\n\nFood preparation additives, processed food preservatives, artificial sweeteners, and nutrients are today obvious risk factors for several chronic degenerative diseases that plague society.\n\nUnder these circumstances, the need for consumer empowerment has never been so dire. The majority of consumers are hurtling blindly to the cliff as they do not understand the cause and effect of the disease cycle associated with this phenomenon.\n\nThe Centre for Nutritional Healthcare has put together tools to empower consumers, enable them to make the right choices, and give them the much-needed independence to pursue health.`
  },
  { 
    id: 'deficiency', 
    title: 'Nutrient Deficiency - The Common Denominator for Degenerative Ailments', 
    icon: <FaHeartbeat />,
    content: `"Let us build a culture of nutrient-rich diets as a vital pillar for preventive health."\n\nAccording to dictionary.com, to nourish is to supply with what is necessary for life, health, and growth; to cherish, foster, keep alive; and to strengthen, build up, or promote.\n\nNourishment is the basic value of food to the body and this value is measured in nutrients. Nutrients enable the body to perform all its biological functions to maintain homeostasis.\n\nIn summary, the body needs nutrients to run metabolic processes, generate and circulate energy to sustain life and growth, and maintain health through a complex bio-system.\n\nWithout nutrients, these vital processes are compromised, leading to systemic breakdowns resulting in disease.\n\nWith the shift in dietary lifestyles inspired by commercial food chains in modern living, high nutrient diets have been compromised for "better tasting and convenient" but low nutrient diets.\n\nSustained consumption of these foods results in a deficit of vitamins and minerals leading to nutrient deficiency, the main cause of the rampant lifestyle disease burden currently sweeping through our societies.\n\nThe response to this calamity has not been effective as the healthcare system focuses on treating symptoms of associated diseases rather than the root causes.\n\nThere is an urgent need for a change of approach in addressing this malignant challenge and the adoption of sustainable and comprehensive interventions to roll back the trend.\n\nAs scientific evidence presents, proper biological body function can be maintained by a sufficient supply of nutrients, which are readily available from healthy food. Going forward, attention needs to shift to nutrient extraction as a function of nutrition.\n\nAt the Centre for Nutritional Healthcare, we believe that broad-based and sustainable interventions offer better chances of solving these complex problems.`
  },
  { 
    id: 'strategies', 
    title: 'Strategies For Alternative Healthcare', 
    icon: <FaTint />,
    content: `Conventional healthcare relies on pharmaceutical medicine to manage diseases. However, new scientific research findings have opened doors to the need for alternative care for existing lifestyle health conditions previously regarded as chronic.\n\nThis approach involves safer, non-invasive, and protective safeguards that provide alternative resolutions and disrupt disease progression.\n\nIt eliminates threats caused by food and environment (primary and secondary) and onboards health-promoting and restorative solutions.\n\nBy redefining certain parameters of individual lifestyles, it empowers the body and provides relief from exposure to undesirable side effects of medicine.\n\nThis program confers conservative, comprehensive, and sustainable health benefits and eliminates the strain caused by frequent health downtimes.\n\nThe Centre for Nutritional Healthcare (CNH) has developed a revolutionary approach that will deliver natural health-inspiring lifestyles.`
  },
  { 
    id: 'justice', 
    title: 'Food Justice', 
    icon: <FaAppleAlt />,
    content: `"We cannot eliminate the prevailing global threats to human health without addressing the critical component of Food Justice."\n\nProponents of food justice advocate for universal access to nutritious, affordable, healthy, and sustainable food as a human right.\n\nIn the quest to meet demand, global food production and processing systems have sidelined nutritional value to prioritize food security. This has led to the emergence of a new food culture around the world that consists of high-calorie but low-nutrient diets. These foods cause nutrient deficiency in the body and trigger disease.\n\nThe use of pesticides and chemical fertilizers in the farm, as well as genetic modification of food organisms with the singular aim of maximizing yields, has resulted in heavily contaminated food on our plates. These chemicals directly cause diseases associated with severe organ damage, endocrine disruption, and cellular malfunction.\n\nIn its wake, unprecedented environmental degradation has occurred, especially in food ecosystems, leading to food insecurity.\n\nToday, every household is exposed to food that contains copious amounts of chemical residue which, when consumed, disrupts vital biochemical processes in the body. The meteoric rise in chronic degenerative diseases in our society today traces its origin to the foregoing.\n\nAdd this to the popular consumption of chemically processed food easily accessible to the majority of consumers, and you have a recipe for disaster.\n\nWhy is food justice important?\nFood is the primary source of life support and health maintenance. Its quality and safety therefore define its capability to perform these functions. When food doesn't measure up to these standards, it becomes toxic and sets the body on the path to disease.\n\nConsumers hardly comprehend this delicate but crucial balance and have become victims of the food environment that they find themselves in to sustain their lives.\n\nFood justice is a response to the serious issues that face food production and public health. Every government should protect its citizens from food and food production systems that endanger their lives and ensure they consume nutritious diets that sustain their health.`
  },
  { 
    id: 'organic', 
    title: 'Organic Diet Is Key To Restorative Health', 
    icon: <FaSeedling />,
    content: `ORGANIC DIET IS KEY TO RESTORATIVE HEALTH\n\n"We must make deliberate efforts to restore the ecosystem as a primary measure to reverse the disease pandemic." \n\nThe importance of consumption of organically produced food for good health and longevity cannot be overemphasized. The human body is an organic structure that operates optimally in a natural ecosystem. \n\nIndustrial food production and processing is today the biggest threat to human health. In scientific studies done around the world, communities that have low or no interaction with artificial food live longer, healthier lives.\n\nEnvironmentalists have also flagged the use of agro-chemicals in food production as the single biggest challenge to the survival of natural flora and fauna.\n\nThis phenomenon poses a big threat to human health today as seen in the proliferation of diseases.\n\nScientific evidence has confirmed that consumption of organically farmed foods is a panacea for good health. This trend is not new and has been gaining traction and popularity across the world in recent times.\n\nTo find real good health, we must return to nature and mimic our ancestors, whose food culture was fully organic. They hunted animals for meat and gathered fruits, nuts, and vegetables. And, this culture rewarded them with robust health and longevity, attributes that we can only envy today.\n\nWe may not find these settings in our living spaces today, owing to decades of cultural modernization which has had an adverse impact on human diet and lifestyle. This highlights the glaring and urgent need to reconstruct natural ecosystems for healthy existence of humans.\n\nFurthermore, coexistence of humans with microbial colonies in the living environment has been found to support good health. Chemical pollution is responsible for disrupting this natural ecosystem and the rise of disease incidence.`
  },

];

const Research = () => {
  const [activeTopic, setActiveTopic] = useState(null);

  const toggleTopic = (id) => {
    setActiveTopic(activeTopic === id ? null : id);
  };

  return (
    <div className="research-container">
      <h1 className="research-title">Research, Monitoring and Evaluation</h1>
      <p>We conduct research and evaluate the impact of our programs and initiatives to ensure their effectiveness and continuous improvement.</p>

      <div className="research-section">
        {topics.map((topic) => (
          <div key={topic.id} className="research-item">
            <button className="research-topic" onClick={() => toggleTopic(topic.id)}>
              <span className="icon">{topic.icon}</span> {topic.title}
            </button>
            {activeTopic === topic.id && (
              <div className="research-content">
                <p>{topic.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Research;
