import { Row, Col, Button } from "react-bootstrap";
import { FileEarmarkFill, Linkedin } from "react-bootstrap-icons";

export default function Profile() {
  return (
    <section>
      <Row>
        <Col>
          <img
            src="/react-app-multiple-page/odhie.webp"
            alt="odhie"
            className="img-fluid  mx-0 border rounded-2"
          />
        </Col>
        <Col sm={9}>
          <h1 className="mt-3">Muhamad Odhie Prasetio</h1>
          <p>
            I am a Full Stack Web Developer graduate of Bachelor degree Computer
            Engineering at the Faculty of Engineering and Computer Science,
            Teknokrat University Indonesia. I am very interested in the IT
            world, especially Web Development, Internet of Things, and Embedded
            Systems.
          </p>

          <a href="#" target="_blank" className="btn btn-secondary mx-2">
            CV <FileEarmarkFill />
          </a>
          <a
            href="https://id.linkedin.com/in/muhamad-odhie-prasetio-582103165"
            target="_blank"
            className="btn btn-secondary"
          >
            Linkedin <Linkedin />
          </a>
        </Col>
      </Row>
    </section>
  );
}
