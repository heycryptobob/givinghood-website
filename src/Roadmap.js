import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Circle } from '@styled-icons/fa-solid'

const roadmap = [
  {
    title: "Phase 1",
    list: [
      { name: "Telegram Group", state: "complete" },
      { name: "Website v1", state: "complete" },
      { name: "Presale", state: "complete" },
      { name: "Marketing", state: "progress" },
      { name: "Fairlaunch!", state: "progress" },
    ],
  },
  {
    title: "Phase 2",
    list: [
      { name: "First Giving Fund giveaway", state: "pending" },
      { name: "Influencer push", state: "pending" },
      { name: "Promotional listings", state: "pending" },
    ],
  },
  {
    title: "Phase 3",
    list: [
      { name: "CMC & CoinGecko", state: "pending" },
      { name: "Audit", state: "pending" },
      { name: "Meme competition", state: "pending" },
      { name: "First community picked donation", state: "pending" },
    ],
  },
];

function ListItem({ listItem }) {
  let icon;
  switch (listItem.state) {
    case "complete":
      icon = <Circle size={16} className="text-success" />
      break;
    case "progress":
      icon = <Circle size={16} className="text-warning" /> 
      break;
    default:
      icon = <Circle size={16} className="text-secondary-light" /> 
      break;
  }

  return (
    <ListGroupItem className="d-flex align-items-center justify-content-between border-0 ps-0">
      {listItem.name}
      &nbsp; {icon}
    </ListGroupItem>
  );
}

function Item({ item, isOdd }) {
  const mdOffset = isOdd ? 6 : 0;
  const lgOffset = isOdd ? 6 : 2;

  return (
    <Row className="mt-3">
      <Col
        xs={12}
        md={{ span: 6, offset: mdOffset }}
        lg={{ span: 4, offset: lgOffset }}
      >
        <Zoom>
          <Card className="border-green-light">
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <ListGroup className="list-group-flush">
                {item.list.map((listItem, key) => (
                  <ListItem key={key} listItem={listItem} />
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Zoom>
      </Col>
    </Row>
  );
}

function isOdd(num) {
  return num % 2;
}

export function Roadmap() {
  return (
    <div className="p-5" id="roadmap">
      <Container className="pb-5">
        <h2 className="display-6 fw-bold mt-4 pt-4 text-center text-green-light">Roadmap</h2>
        <p className="offset-md-3 col-md-6 fs-5 mt-4 text-center mb-5">
          GivingHood is going places, we hope you stick with us for the ride.
        </p>
        {roadmap.map((item, key) => (
          <Item key={key} item={item} isOdd={isOdd(key)} />
        ))}
      </Container>
    </div>
  );
}
