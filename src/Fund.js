import {
  Container,
  Row,
  Col,
  Card,
  Button,
  OverlayTrigger,
} from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { PublishTooltip } from "./PublishTooltip";

const data = [
  {
    title: "Daily Rewards",
    tagline: "15%",
    description:
      "The people with the top 3 points on gleam.io will win 15% of the fund each. Two others winners will be chosen randomly and will be given 10% of the fund each.",
  },
  {
    title: "Weekly Rewards",
    tagline: "30%",
    description:
      "There will be a huge winner who gets 30% of the fund. There again will be smaller winners too. The remaining amount will sent to the community's charity of choice!",
  },
];

function CustomCard({ item }) {
  return (
    <Col>
      <Zoom>
        <Card className="p-2 mb-4">
          <Card.Body className="text-center">
            <Card.Title className="pb-4">{item.title}</Card.Title>
            <Card.Text className="display-5 ">{item.tagline}</Card.Text>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>
      </Zoom>
    </Col>
  );
}

export function Fund() {
  return (
    <div className="p-5" id="fund">
      <Container className="pb-5">
        <Row>
          <Col>
            <h1 className="display-6 fw-bold mt-4 pt-4">
              Introducing the Giving Fund
            </h1>
            <p className="fs-5 mt-4">
              In simple terms, this fund is our giveaway system as a reward to
              active participation in the promotion of GivingHood through the
              gleam.io platform.
            </p>
            <p className="fs-5 mt-4">
              2% of every transaction will do go the Giving Fund.
            </p>
            <OverlayTrigger
              placement="bottom"
              overlay={PublishTooltip}
            >
              <Button
                size="lg"
                variant="outline-primary"
                className="mt-4"
              >
                Fund Contract Address
              </Button>
            </OverlayTrigger>
          </Col>
          <Col>
            <Row className="mt-5">
              {data.map((item, key) => (
                <CustomCard key={key} item={item} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
