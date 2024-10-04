import styled from 'styled-components'
import { FaAppleAlt, FaCarrot, FaHeartbeat } from 'react-icons/fa'

const PageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  box-sizing: border-box;
`

const Title = styled.h1`
  color: #4CAF50;
  font-size: 3rem;
  margin-bottom: 2rem;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin-bottom: 3rem;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Icon = styled.div`
  font-size: 3rem;
  color: #4CAF50;
  margin-bottom: 1rem;
`

const IconText = styled.p`
  font-weight: bold;
  color: #333;
`

const Home = () => {
  return (
    <PageContainer>
      <Title>Welcome to Nutri</Title>
      <Subtitle>
        Nutritional Healthcare delivers natural healthcare solutions that are sustainable, comprehensive, and restorative. We believe in the power of nutrition to transform lives.
      </Subtitle>
      <IconContainer>
        <IconWrapper>
          <Icon><FaAppleAlt /></Icon>
          <IconText>Healthy Eating</IconText>
        </IconWrapper>
        <IconWrapper>
          <Icon><FaCarrot /></Icon>
          <IconText>Natural Solutions</IconText>
        </IconWrapper>
        <IconWrapper>
          <Icon><FaHeartbeat /></Icon>
          <IconText>Holistic Health</IconText>
        </IconWrapper>
      </IconContainer>
    </PageContainer>
  )
}

export default Home;
