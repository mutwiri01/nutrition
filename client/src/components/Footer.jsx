import styled from 'styled-components'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const FooterContainer = styled.footer`
  background-color: #4CAF50;
  color: #ffffff;
  padding: 2rem 0;
  width: 100%;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 0 2rem;
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #E8F5E9;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialIcons>
          <SocialIcon href="#"><FaFacebookF /></SocialIcon>
          <SocialIcon href="#"><FaTwitter /></SocialIcon>
          <SocialIcon href="#"><FaInstagram /></SocialIcon>
        </SocialIcons>
        <p>&copy; 2024 © Centre for Nutritional Healthcare All rights reserved. Consent must be procured for reproduction of any part of the content in this site.</p>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer