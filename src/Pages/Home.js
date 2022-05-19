import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";

export default function Home() {
  const imgStyle = { height: "20vh", objectFit: "cover" };
  return (
    <section>
      <h1>Welcome to My React Web Multiple Page</h1>
      <h3>Created with React CRA</h3>
      <div className="d-flex justify-content-between">
        <img
          src="/react-app-multiple-page/ayaka.gif"
          alt=""
          className="rounded-2"
          style={imgStyle}
        />
        <ListGroup className="m-auto">
          <ListGroup.Item
            className="text-light fw-bold"
            style={{ backgroundColor: "#282c34" }}
          >
            Using multiple NPM Packages
          </ListGroup.Item>
          <ListGroup.Item>Bootstrap React</ListGroup.Item>
          <ListGroup.Item>Bootstrap Icon React</ListGroup.Item>
          <ListGroup.Item>React Router</ListGroup.Item>
        </ListGroup>
        <img
          src="/react-app-multiple-page/qiqi.gif"
          alt=""
          className="rounded-2"
          style={imgStyle}
        />
      </div>
    </section>
  );
}
