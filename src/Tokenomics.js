import { Container, Row, Col, Card } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

const metrics = [
  {
    title: "Liquidity",
    value: 5,
  },
  {
    title: "Holders",
    value: 4,
  },
  {
    title: "Burn",
    value: 1,
  },
  {
    title: "Giving Fund",
    value: 2,
  },
];

function Metric({ metric }) {
  return (
    <Col>
      <Zoom>
        <Card className="border-0 bg-transparent">
          <Card.Body className="text-center ">
            <Card.Title>{metric.title}</Card.Title>
            <Card.Text className="display-2 fw-bold">{metric.value}%</Card.Text>
          </Card.Body>
        </Card>
      </Zoom>
    </Col>
  );
}

export function Tokenomics() {
  return (
    <div className="p-5 bg-light" id="tokenomics">
      <Container className="pb-5">
        <h2 className="display-6 fw-bold mt-4 pt-4 text-center">Tokenomics</h2>
        <p className="offset-md-3 col-md-6 fs-5 mt-4 text-center">
          There will be a 12% transaction fee in order to grow the liquidity, compensate holders, increase the token value and add to the fund.
        </p>
        <Row xs={1} md={2} lg={4} className="g-4 mt-5">
          {metrics.map((metric, key) => (
            <Metric key={key} metric={metric} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
