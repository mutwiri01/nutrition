
import styled from 'styled-components'
import { FaBook } from 'react-icons/fa'

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

const JoinSection = styled.div`
  margin-top: 3rem;
  text-align: center;
  width: 100%;
`

const JoinTitle = styled.h2`
  color: #4CAF50;
  margin-bottom: 1rem;
`

const JoinDescription = styled.p`
  margin-bottom: 1rem;
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

const ResourceCenter = () => {
  return (
    <PageContainer>
      <Title>Resource Center</Title>
      <Grid>
        <Card>
          <Icon><FaBook /></Icon>
          <CardTitle>E-Books and Articles</CardTitle>
          <p>Access our library of resources on nutrition, health, and sustainable living.</p>
        </Card>
      </Grid>
      <JoinSection>
        <JoinTitle>Join Our Community</JoinTitle>
        <JoinDescription>Become a member of our community and gain access to exclusive resources.</JoinDescription>
        <Button>Join Now</Button>
      </JoinSection>
    </PageContainer>
  )
}

export default ResourceCenter