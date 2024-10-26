
import styled from 'styled-components'
import { FaSeedling, FaTags, FaWineBottle, FaTree, FaBan } from 'react-icons/fa'

const PageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
`

const Title = styled.h1`
  color: #4CAF50;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
`

const Card = styled.div`
  background-color: #E8F5E9;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`

const Icon = styled.div`
  font-size: 3rem;
  color: #4CAF50;
  margin-bottom: 1rem;
`

const CardTitle = styled.h3`
  color: #2C3E50;
  margin-bottom: 1rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 500px;
`

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
`

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  resize: vertical;
`

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`

const Projects = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  return (
    <PageContainer>
      <Title>Projects</Title>
      <Grid>
        <Card>
          <Icon><FaSeedling /></Icon>
          <CardTitle>Organic Community</CardTitle>
          <p>Fostering local organic farming initiatives.</p>
        </Card>
        <Card>
          <Icon><FaTags /></Icon>
          <CardTitle>Labeling for Nutritional Health</CardTitle>
          <p>Promoting clear and informative food labeling.</p>
        </Card>
        <Card>
          <Icon><FaWineBottle /></Icon>
          <CardTitle>Beverages for Healthy Lives</CardTitle>
          <p>Encouraging the consumption of healthier beverages.</p>
        </Card>
        <Card>
          <Icon><FaTree /></Icon>
          <CardTitle>Rebuilding Natural Ecosystems</CardTitle>
          <p>Restoring balance to our environment through sustainable practices.</p>
        </Card>
        <Card>
          <Icon><FaBan /></Icon>
          <CardTitle>Lobby Against Harmful Food Additives</CardTitle>
          <p>Advocating for the removal of harmful substances from our food supply.</p>
        </Card>
      </Grid>
      <Form onSubmit={handleSubmit}>
        <h2>Project Application Form</h2>
        <Input type="text" placeholder="Full Name" required />
        <Input type="email" placeholder="Email" required />
        <Input type="tel" placeholder="Phone Number" />
        <TextArea placeholder="Which project are you interested in and why?" rows="4" required />
        <Button type="submit">Apply for Project</Button>
      </Form>
    </PageContainer>
  )
}

export default Projects