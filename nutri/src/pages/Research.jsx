
import styled from 'styled-components'

const ResearchContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`

const Research = () => {
  return (
    <ResearchContainer>
      <Title>Research, Monitoring and Evaluation</Title>
      <p>We conduct research and evaluate the impact of our programs and initiatives to ensure their effectiveness and continuous improvement.</p>
    </ResearchContainer>
  )
}

export default Research