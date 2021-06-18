import {
  Container,
  Button,
  Row,
  Col,
  // OverlayTrigger,
  // Card,
} from "react-bootstrap";
// import { ReactComponent as BscscanIcon } from "./images/bscscan.svg";
// import { ReactComponent as BogToolsIcon } from "./images/bogtools.svg";
// import { ReactComponent as PancakeSwapIcon } from "./images/pancakeswap.svg";
// import { PublishTooltip } from "./PublishTooltip";
import { Telegram } from "@styled-icons/fa-brands";
import logo from './logo.svg'

export function Hero() {
  return (
    <div className="p-5" id="hero">
      <Container>
        <Row>
          <Col className="text-white">
            <h1 className="display-5 fw-bold mt-4 pt-4">GivingHood</h1>
            <p className="fs-4 mt-4">
              Sick and tired of getting killed by the crypto market and scammed
              by shitcoins? Don’t fear, GivingHood is here.
            </p>
            <div className="mt-5 mb-5 pb-5 hidden">
              <Button size="lg" variant="outline-light" href="https://t.me/GivingHood" target="_blank" rel="noreferrer">
                <div className="d-flex align-items-center">
                  <Telegram size={32} className="icon text-white" />
                  &nbsp; Telegram Group
                </div>
              </Button>
              {/* <OverlayTrigger placement="bottom" overlay={PublishTooltip}>
            <Button size="lg" variant='light'>
              <div className="d-flex align-items-center">
                <PancakeSwapIcon
                  size={24}
                  className="icon text-primary"
                  height={24}
                  width={24}
                />
                &nbsp; PancakeSwap
              </div>
            </Button>
          </OverlayTrigger>
          <OverlayTrigger placement="bottom" overlay={PublishTooltip}>
            <Button
              size="lg"
              variant="link"
              className="border-0 ms-2 text-white"
            >
              <div className="d-flex align-items-center">
                <BscscanIcon
                  size={24}
                  className="icon text-secondary"
                  height={24}
                  width={24}
                />
                &nbsp; Contract
              </div>
            </Button>
          </OverlayTrigger>
          <OverlayTrigger placement="bottom" overlay={PublishTooltip}>
            <Button
              size="lg"
              variant="outline-secondary"
              className="border-0 ms-2"
            >
              <div className="d-flex align-items-center">
                <BogToolsIcon
                  size={24}
                  className="icon text-secondary"
                  height={24}
                  width={24}
                />
                &nbsp; Chart
              </div>
            </Button>
          </OverlayTrigger> */}
            </div>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <div className="text-center text-white">
              <img src={logo} width="160" height="160" alt="GivingHood" />
              <h2 className="fw-bold">Fair Launch</h2>
              <p>Launch time will be annouced soon.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
