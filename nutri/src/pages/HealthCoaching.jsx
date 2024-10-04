import styled from 'styled-components'

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
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`

const Section = styled.section`
  margin-bottom: 2rem;
  width: 100%;
`

const FormContainer = styled.div`
  background-color: #ecf0f1;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`

const HealthCoaching = () => {
  return (
    <PageContainer>
      <Title>Health Coaching</Title>
      <Section>
        <h2>Individual Coaching</h2>
        <p>Our individual health coaching program is tailored to your specific needs and goals.</p>
      </Section>
      <Section>
        <h2>Corporate Coaching</h2>
        <p>We offer comprehensive health coaching programs for businesses to improve employee wellness and productivity.</p>
      </Section>
      <Section>
        <h2>Health History Form</h2>
        <FormContainer>
          <Form>
            <Input type="text" placeholder="Full Name" required />
            <Input type="email" placeholder="Email" required />
            <Input type="tel" placeholder="Phone Number" />
            <TextArea placeholder="Please describe your current health concerns and goals" rows="5" required />
            <Button type="submit">Submit Health History</Button>
          </Form>
        </FormContainer>
      </Section>
    </PageContainer>
  )
}

export default HealthCoaching