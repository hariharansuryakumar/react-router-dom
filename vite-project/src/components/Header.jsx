import React from 'react'
import{Navbar,Nav,Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Header() {
   
    
  return (
    <div>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">React-Router-Dom</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">ALL</Nav.Link>
            <Nav.Link href="/fullstackdevelopment">FULL STACK DEVELOPMENT</Nav.Link>
            <Nav.Link href="/datascience">DATA SCIENCE</Nav.Link>
            <Nav.Link href="/cybersecurity">CYBER SECURITY</Nav.Link>
            <Nav.Link href="/career">CAREER</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header