import { Container, Button } from "react-bootstrap";
import bscscan from "./images/bscscan.svg";
import bogtools from "./images/bogtools.svg";
import pancakeswap from "./images/pancakeswap.svg";

export function Hero() {
  return (
    <div className="p-5 bg-light">
      <Container>
        <h1 className="display-5 fw-bold mt-4 pt-4">GivingHood</h1>
        <p className="col-md-8 fs-4 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-4 mb-5 pb-5">
          <Button size="lg">
            <div className="d-flex align-items-center">
              <img src={pancakeswap} width={24} height={24} alt="pancakeswap" />
              &nbsp; Buy GivingHood
            </div>
          </Button>
          <Button size="lg" variant="white">
            <div className="d-flex align-items-center">
              <img src={bscscan} width={24} height={24} alt="bscscan" />
              &nbsp; Contract
            </div>
          </Button>
          <Button size="lg" variant="white">
            <div className="d-flex align-items-center">
              <img
                src={bogtools}
                width={24}
                height={24}
                alt="bogtools"
                className="fill-secondary"
              />
              &nbsp; Chart
            </div>
          </Button>
        </div>
      </Container>
    </div>
  );
}
