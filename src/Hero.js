import { Container, Button } from "react-bootstrap";

export function Hero() {
  return (
    <div className="p-5 bg-light">
      <Container>
        <h1 className="display-5 fw-bold mt-4 pt-4">GivingHood</h1>
        <p class="col-md-8 fs-4 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="mt-4 mb-5 pb-5">
          <Button size='lg'>Buy GivingHood</Button>
        </div>
      </Container>
    </div>
  )
}