import { Container, Button, OverlayTrigger } from "react-bootstrap";
import { ReactComponent as BscscanIcon } from "./images/bscscan.svg";
import { ReactComponent as BogToolsIcon } from "./images/bogtools.svg";
import { ReactComponent as PancakeSwapIcon } from "./images/pancakeswap.svg";
import { PublishTooltip } from "./PublishTooltip";

export function Hero() {
  return (
    <div className="p-5 bg-light">
      <Container>
        <h1 className="display-5 fw-bold mt-4 pt-4">GivingHood</h1>
        <p className="col-md-6 fs-4 mt-4">
          Sick and tired of getting killed by the crypto market and scammed by
          shitcoins? Don’t fear, GivingHood is here.
        </p>
        <div className="mt-4 mb-5 pb-5">
          <OverlayTrigger placement="bottom" overlay={PublishTooltip}>
            <Button size="lg">
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
              variant="outline-secondary"
              className="border-0 ms-2"
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
          </OverlayTrigger>
        </div>
      </Container>
    </div>
  );
}