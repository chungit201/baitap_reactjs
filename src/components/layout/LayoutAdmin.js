
import React, { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom';
import { isAuthencation } from '../../ultils';
const LayoutAdmin = () => {
  useEffect(()=>{
    isAuthencation();
  },[])
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Doashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/admin/list-products">Products</Nav.Link>
            <Nav.Link href="/admin/add-products">Add Products</Nav.Link>
            <Nav.Link href="login">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Outlet />
    </div >
  )
}

export default LayoutAdmin
