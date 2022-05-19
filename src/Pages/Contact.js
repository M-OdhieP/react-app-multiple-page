import { ListGroup } from "react-bootstrap";
import { Github, Linkedin, Whatsapp } from "react-bootstrap-icons";

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>

      <ListGroup>
        <ListGroup.Item>
          <a
            href="https://github.com/M-OdhieP"
            target="_blank"
            className="btn btn-secondary"
          >
            Github <Github />
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="https://id.linkedin.com/in/muhamad-odhie-prasetio-582103165"
            target="_blank"
            className="btn btn-secondary"
          >
            Linkedin <Linkedin />
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            class="btn btn-secondary"
            target="blank"
            href="https://wa.me/089520003191"
          >
            WhatsApp <Whatsapp />
          </a>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}
