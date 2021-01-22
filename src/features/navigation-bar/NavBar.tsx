import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { connect, disconnect, selectConnect } from './NavBarSlice';

import styles from './NavBar.module.css';
import { Col, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

export function NavBar() {
  const connected = useSelector(selectConnect);
  const dispatch = useDispatch();

  return (
    <>
      {/* <Navbar fixed="top" bg="dark" variant="dark" className="App-header">
        <Navbar.Brand href="#home" className="ml-sm-1">
          <img
            alt=""
            src="https://res.cloudinary.com/dk2ghb1pg/image/upload/w_108,h_36,c_scale/v1531942668/Logo_eStory_simple_klalco.png"
            height="35"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item as="li" className="bg_estory">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" className="bg_estory">
            <Nav.Link href="/explore">Explore</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" className="bg_estory">
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Form inline>
            <Form.Row>
              <Col xs={10}>
                <FormControl type="text" placeholder="Search" className="ml-sm-5 form-inline" />
              </Col>
            </Form.Row>
          </Form>
        </Nav>

        <Navbar.Toggle />
        <Nav>
          <Nav.Item as="li" className="bg_estory">
            <Nav.Link href="#LogIn">
              <Button>Log In</Button>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="#Create">
              <Button variant="success">Create Timeline</Button>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar> */}
      <div className={styles.navbar}>
        <img
          className={`${styles.logo}`}
          src="https://res.cloudinary.com/dk2ghb1pg/image/upload/w_108,h_36,c_scale/v1531942668/Logo_eStory_simple_klalco.png"
          width="108"
          alt="logo"
        ></img>
        <a className={`${styles.navBarButton} ${styles.selected}`}>
          <div>
            <p>Home</p>
          </div>
        </a>
        <a className={`${styles.navBarButton}`}>
          <div>
            <p>Explore</p>
          </div>
        </a>
        <a className={`${styles.navBarButton}`}>
          <div>
            <p>About</p>
          </div>
        </a>
      </div>
    </>
  );
}
