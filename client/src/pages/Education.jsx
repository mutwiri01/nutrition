
import styled from 'styled-components'
import { FaGraduationCap, FaBriefcase, FaLeaf, FaHeartbeat } from 'react-icons/fa'

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

const Education = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  return (
    <PageContainer>
      <Title>Corporate and Public Education</Title>
      <Grid>
        <Card>
          <Icon><FaGraduationCap /></Icon>
          <CardTitle>Health Freedom</CardTitle>
          <p>Empowering individuals with knowledge for informed health decisions.</p>
        </Card>
        <Card>
          <Icon><FaBriefcase /></Icon>
          <CardTitle>Productivity in Occupation</CardTitle>
          <p>Enhancing workplace wellness and efficiency through nutrition.</p>
        </Card>
        <Card>
          <Icon><FaLeaf /></Icon>
          <CardTitle>Environment and Nutrition</CardTitle>
          <p>Exploring the connection between our diet and the planet`s health.</p>
        </Card>
        <Card>
          <Icon><FaHeartbeat /></Icon>
          <CardTitle>Lifestyle and Health</CardTitle>
          <p>Promoting holistic approaches to wellness and longevity.</p>
        </Card>
      </Grid>
      <Form onSubmit={handleSubmit}>
        <h2>Application Form</h2>
        <Input type="text" placeholder="Full Name" required />
        <Input type="email" placeholder="Email" required />
        <Input type="tel" placeholder="Phone Number" />
        <Input type="text" placeholder="Company (if applicable)" />
        <Button type="submit">Apply for Education Program</Button>
      </Form>
    </PageContainer>
  )
}

export default Education