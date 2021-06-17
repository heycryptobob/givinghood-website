import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Badge,
} from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { CheckCircle, Circle } from "@styled-icons/fa-solid";

const roadmap = [
  {
    title: "title",
    list: [
      { name: "objective 1", state: "complete" },
      { name: "objective 2", state: "complete" },
      { name: "objective 3", state: "progress" },
      { name: "objective 4", state: "progress" },
      { name: "objective 4", state: "pending" },
    ],
  },
  {
    title: "title",
    list: [
      { name: "objective 1", state: "pending" },
      { name: "objective 2", state: "pending" },
      { name: "objective 3", state: "pending" },
    ],
  },
  {
    title: "title",
    list: [
      { name: "objective 1", state: "pending" },
      { name: "objective 2", state: "pending" },
      { name: "objective 3", state: "pending" },
      { name: "objective 4", state: "pending" },
    ],
  },
];

function ListItem({ listItem }) {
  let icon;
  switch (listItem.state) {
    case "complete":
      icon = <Badge className="bg-success">Completed</Badge>;
      break;
    case "progress":
      icon = <Badge className="bg-warning">In Progress</Badge>;
      break;
    default:
      icon = <Badge className="bg-secondary">Pending</Badge>;
      break;
  }

  return (
    <ListGroupItem className="d-flex align-items-center border-0 ps-0">
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
          <Card>
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
    <div className="p-5 bg-light" id="roadmap">
      <Container className="pb-5">
        <h2 className="display-6 fw-bold mt-4 pt-4 text-center">Roadmap</h2>
        <p className="offset-md-3 col-md-6 fs-5 mt-4 text-center mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {roadmap.map((item, key) => (
          <Item key={key} item={item} isOdd={isOdd(key)} />
        ))}
      </Container>
    </div>
  );
}
