import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab, Row } from "react-bootstrap";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";

import Auth from "../utils/auth";

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Row>
            <Navbar.Brand as={Link} to="/">
              HMS
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar" className="d-flex flex-row-reverse">
              <Nav className="ml-auto d-flex">
                {/* if user is logged in show saved appointments and logout */}
                {Auth.loggedIn() ? (
                  <>
                    <Nav.Link as={Link} to="/AppointmentList">
                      See Your Appointments
                    </Nav.Link>

                    <Nav.Link as={Link} to="/addAppointment">
                      Book an Appointment Here
                    </Nav.Link>
                    <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Item>
                      <Nav.Link as={Link} to="/Login">
                        Login
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link as={Link} to="/Signup">
                        Sign Up
                      </Nav.Link>
                    </Nav.Item>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Row>
        </Container>
      </Navbar>
      {/* set modal data up */}
      {/* <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      > */}
      {/* tab container to do either signup or login component */}
      {/* <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body> */}
      {/* <Tab.Content>
              <Tab.Pane eventKey="login">
                <Login handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUp handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal> */}
    </>
  );
};

export default AppNavbar;
