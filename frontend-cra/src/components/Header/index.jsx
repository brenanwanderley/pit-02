import React from 'react';
import './style.css';
import { Navbar, Nav } from 'react-bootstrap';

// eslint-disable-next-line no-unused-vars
export default function index({ title, routes }) {
  return (
    <Navbar bg="dark" variant="dark" className="nav">
      <Navbar.Brand href="#home">{title}</Navbar.Brand>
      <Nav
        activeKey="/home"
        // eslint-disable-next-line no-alert
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item className="link">
          <Nav.Link href="/home">HOME</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
