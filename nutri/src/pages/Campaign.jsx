
import styled from 'styled-components'
import { FaBalanceScale, FaCarrot, FaRunning } from 'react-icons/fa'

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

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: left;
`

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  &:before {
    content: "•";
    color: #4CAF50;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-right: 0.5em;
  }
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

const Campaign = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  return (
    <PageContainer>
      <Title>Campaign for Healthy Communities</Title>
      <Grid>
        <Card>
          <Icon><FaBalanceScale /></Icon>
          <CardTitle>Food Justice</CardTitle>
          <p>Promoting equal access to nutritious food for all.</p>
        </Card>
        <Card>
          <Icon><FaCarrot /></Icon>
          <CardTitle>Food for Health</CardTitle>
          <List>
            <ListItem>Nutrient harvest</ListItem>
            <ListItem>Plant protein initiative</ListItem>
            <ListItem>The national food plate</ListItem>
            <ListItem>Water campaign</ListItem>
          </List>
        </Card>
        <Card>
          <Icon><FaRunning /></Icon>
          <CardTitle>Physical Exercise</CardTitle>
          <p>Encouraging active lifestyles for overall well-being.</p>
        </Card>
      </Grid>
      <Form onSubmit={handleSubmit}>
        <h2>Participation Application Form</h2>
        <Input type="text" placeholder="Full Name" required />
        <Input type="email" placeholder="Email" required />
        <Input type="tel" placeholder="Phone Number" />
        <TextArea placeholder="Why do you want to participate in our campaign?" rows="4" required />
        <Button type="submit">Apply to Participate</Button>
      </Form>
    </PageContainer>
  )
}

export default Campaign