import { Container, Card, Col, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

const features = [
  {
    title: "Asset Security",
    description:
      "Liquidity will be locked, the ownership renounced, and we will prevent big whales from holding too much.",
  },
  {
    title: "Historical Record",
    description:
      "We brought token DogeRanker (DR) to a $2 million market cap! Imagine where we will take GivingHood.",
  },
  {
    title: "Promotional Marketing",
    description:
      "We are heavily devoted to marketing. Reddit, Twitter, YouTube, Telegram, you name it, we are on it!",
  },
  {
    title: "Giving Fund",
    description:
      "Every day there will be a gleam.io competition. Win entries by competiting simple tasks.",
  },
];

function Feature({ feature }) {
  return (
    <Col>
      <Zoom>
        <Card className="border-0">
          <Card.Body className="text-center">
            <Card.Title className="pb-4">{feature.title}</Card.Title>
            <Card.Text>{feature.description}</Card.Text>
          </Card.Body>
        </Card>
      </Zoom>
    </Col>
  );
}

export function Features() {
  return (
    <div className="p-5" id="features">
      <Container className="pb-5">
        <h2 className="display-6 fw-bold mt-4 pt-4 text-center">Features</h2>
        <p className="offset-md-3 col-md-6 fs-5 mt-4 text-center">
          GivingHood will reward holders and participants
        </p>
        <Row xs={1} md={4} className="g-4 mt-5">
          {features.map((feature, key) => (
            <Feature key={key} feature={feature} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
