
import styled from 'styled-components'

const SupportContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`

const Support = () => {
  return (
    <SupportContainer>
      <Title>Support Our Cause</Title>
      <p>Learn how you can support our mission through donations and partnerships.</p>
    </SupportContainer>
  )
}

export default Support