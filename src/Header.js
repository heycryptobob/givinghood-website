// import logo from './logo.svg'
import { Navbar, Nav, Container, Button, OverlayTrigger } from "react-bootstrap";
import { PublishTooltip } from "./PublishTooltip";
// import { Link } from "react-router-dom";

export function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          {/* <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "} */}
          GivingHood
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#features" className="me-3">Features</Nav.Link>
            <Nav.Link href="#tokenomics" className="me-3">Tokenomics</Nav.Link>
            <Nav.Link href="#roadmap" className="me-3">Roadmap</Nav.Link>
            <Nav.Link href="#fund" className="me-3">Fund</Nav.Link>
            <Nav.Link href="#community" className="me-3">Community</Nav.Link>
            <OverlayTrigger placement="bottom" overlay={PublishTooltip}>
              <Nav.Link as={Button} variant="outline-secondary" className="last">Buy GivingHood</Nav.Link>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}