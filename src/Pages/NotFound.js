import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NotFound() {
  return (
    <Container>
      <div className="row">
        <div className="col-4">
          <img src="/notFound.jpeg" className="img-fluid" alt="" />
        </div>
        <div className="col-8 text-center m-auto">
          <h1>AWWW...DON’T CRY.</h1>
          <p>
            It's just a 404 Error! <br /> What you’re looking for may have been
            misplaced in Long Term Memory.
          </p>
        </div>
      </div>
    </Container>
  );
}
