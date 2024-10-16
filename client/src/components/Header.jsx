import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaLeaf } from 'react-icons/fa'

const HeaderContainer = styled.header`
  background-color: #4CAF50;
  padding: 1rem 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Logo = styled(Link)`
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
`

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #4CAF50;
    padding: 1rem;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  
  &:hover {
    color: #E8F5E9;
  }
`

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/"><FaLeaf style={{ marginRight: '0.5rem' }} />Nutritional Healthcare</Logo>
        <MenuButton onClick={toggleMenu}>☰</MenuButton>
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/health-coaching">Health Coaching</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/campaign">Campaign</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/resource-center">Resource Center</NavLink>
          <NavLink to="/support">Support</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  )
}

export default Header