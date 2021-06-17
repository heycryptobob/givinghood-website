import { Container, Row, Col, Card } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

const metrics = [
  {
    // img_src: "https://via.placeholder.com/64.png",
    title: "Card title",
    text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    // img_src: "https://via.placeholder.com/64.png",
    title: "Card title",
    text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    // img_src: "https://via.placeholder.com/64.png",
    title: "Card title",
    text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    // img_src: "https://via.placeholder.com/64.png",
    title: "Card title",
    text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
];

function Metric({ metric }) {
  return (
    <Col>
      <Zoom>
        <Card>
          <Card.Body>
            {/* <Card.Img variant="top" src={metric.img_src} /> */}
            <Card.Title>{metric.title}</Card.Title>
            <Card.Text>{metric.text}</Card.Text>
          </Card.Body>
        </Card>
      </Zoom>
    </Col>
  );
}

export function Tokenomics() {
  return (
    <div className="p-5" id="tokenomics">
      <Container className="pb-5">
        <h2 className="display-6 fw-bold mt-4 pt-4 text-center">Tokenomics</h2>
        <p className="offset-md-3 col-md-6 fs-5 mt-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
