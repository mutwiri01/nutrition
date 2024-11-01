import { useState } from 'react'
import '../css/education.css'
import { FaLeaf, FaHeartbeat } from 'react-icons/fa'

const Education = () => {
  const [modalContent, setModalContent] = useState(null)

  const handleListItemClick = (content) => {
    if (content === "Organic Diet Is Key To Restorative Health") {
      setModalContent(
        <>
          <h3 style={{ fontWeight: "bold", color: "green", textTransform: "lowercase" }}>Organic Diet Is Key To Restorative Health</h3>
          <p>We must make deliberate efforts to restore the ecosystem as a primary measure to reverse the disease pandemic.</p>
          {/* Rest of the content here */}
        </>
      )
    } else if (content === "High Nutrient Diets Lead To Healthier Productive Communities") {
      setModalContent(
        <>
          <h3 style={{ fontWeight: "bold", color: "green", textTransform: "lowercase" }}>High Nutrient Diets Lead To Healthier Productive Communities</h3>
          {/* Content for High Nutrient Diets */}
        </>
      )
    } else if (content === "Strategies For Alternative Healthcare") {
      setModalContent(
        <>
          <h3 style={{ fontWeight: "bold", color: "green", textTransform: "lowercase" }}>Strategies For Alternative Healthcare</h3>
          {/* Content for Strategies For Alternative Healthcare */}
        </>
      )
    } else if (content === "advocacy for preventive health") {
      setModalContent(
        <>
          <h3 style={{ fontWeight: "bold", color: "green", textTransform: "lowercase" }}>Advocacy For Preventive Health</h3>
          {/* Content for Advocacy */}
        </>
      )
    } else {
      setModalContent(<p>{content}</p>)
    }
  }

  const closeModal = () => {
    setModalContent(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }

  return (
    <div className="page-container">
      <div className="introduction">
        <p>Public education is a vital tool for social economic change and growth. Going by the threat to life and heavy economic burden posed by lifestyle diseases in society today, no effort should be spared to enlighten and empower the people to overcome these challenges. Centre for Nutritional Health shall organise public sensitization and education forums to get the message across.</p>
      </div>

      <h1 className="title">Education</h1>
      
      <div className="grid">
        {/* Card for Lifestyle & Health */}
        <div className="card">
          <div className="icon"><FaHeartbeat /></div>
          <h3 className="card-title">Lifestyle & Health</h3>
          <ul>
            <li className="list-item" onClick={() => handleListItemClick("Strategies For Alternative Healthcare")}>Strategies For Alternative Healthcare</li>
            <li className="list-item" onClick={() => handleListItemClick("High Nutrient Diets Lead To Healthier Productive Communities")}>High Nutrient Diets Lead To Healthier Productive Communities</li>
          </ul>
        </div>

        {/* Card for Environment & Nutrition */}
        <div className="card">
          <div className="icon"><FaLeaf /></div>
          <h3 className="card-title">Environment & Nutrition</h3>
          <ul>
            <li className="list-item" onClick={() => handleListItemClick("Organic Diet Is Key To Restorative Health")}>Organic Diet Is Key To Restorative Health</li>
          </ul>
        </div>

        {/* Card for Advocacy For Preventive Health */}
        <div className="card">
          <div className="icon"><FaLeaf /></div>
          <h3 className="card-title">Advocacy For Preventive Health</h3>
          <ul>
            <li className="list-item" onClick={() => handleListItemClick("advocacy for preventive health")}>Advocacy For Preventive Health</li>
          </ul>
        </div>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <h2>Application Form</h2>
        <input className="input" type="text" placeholder="Full Name" required />
        <input className="input" type="email" placeholder="Email" required />
        <input className="input" type="tel" placeholder="Phone Number" />
        <input className="input" type="text" placeholder="Company (if applicable)" />
        <button className="button" type="submit">Submit</button>
      </form>

      {modalContent && (
        <div className="modal active">
          <div className="modal-content">
            {modalContent}
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Education
