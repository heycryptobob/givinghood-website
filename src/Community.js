import { Container } from "react-bootstrap";
import { 
  Telegram, 
  // Twitter 
} from "@styled-icons/fa-brands";

function Social({ children, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="me-4 bg-dark text-light">
      {children}
    </a>
  );
}

export function Community() {
  return (
    <div className="p-5 bg-dark text-light text-center" id="community">
      <Container className="pb-5">
        <h2 className="display-6 fw-bold mt-4 pt-4">Community</h2>
        <p className="offset-md-3 col-md-6 fs-5 mt-4 mb-5">
          Join the GivingHood community!
        </p>
        <div>
          <Social url="https://t.me/GivingHood">
            <Telegram size={40} />
          </Social>
          {/* <Social url="">
            <Twitter size={40} />
          </Social> */}
        </div>
      </Container>
    </div>
  );
}
