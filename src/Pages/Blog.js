import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Blog() {
  const [artikels, setArtikels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getArtikels() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/blogs"
      );
      const response = await request.json();

      setArtikels(response);
      setLoading(false);
      console.log(response);
    }
    getArtikels();
  }, []);

  return (
    <section>
      <h1>Blog Page</h1>
      <h2>using flight space api to get data</h2>
      <p>"https://api.spaceflightnewsapi.net/v3/blogs"</p>
      {loading && <i>Loading artikel...</i>}
      {!loading && (
        <ListGroup as="ol" numbered className="mt-3">
          {artikels.map((artikel) => {
            return (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                key={artikel.id}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <Link to={`/blog/${artikel.id}`}>{artikel.title}</Link>{" "}
                    {new Date(artikel.publishedAt).toLocaleDateString()}
                  </div>
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </section>
  );
}
