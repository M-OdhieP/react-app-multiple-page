import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

export default function BlogDetail() {
  const [artikel, setArtikel] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const Param = useParams();

  useEffect(() => {
    async function getArtikel() {
      const request = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${Param.id}`
      );

      if (!request.ok) {
        setLoading(false);
        return setNotFound(true);
      }

      const response = await request.json();

      setArtikel(response);
      setLoading(false);

      console.log(response);
    }
    getArtikel();
  }, [Param]);

  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  if (notFound && show) {
    return (
      <Alert
        variant="danger"
        className="mt-4"
        onClose={() => {
          setShow(false);
          navigate("/blog");
        }}
        dismissible
      >
        <Alert.Heading>Article Is Not Found</Alert.Heading>
        <p>The Page You're Looking For Was Not Found</p>
      </Alert>
    );
  }

  return (
    <section>
      {loading ? (
        <h1>Article Loading...</h1>
      ) : (
        <article>
          <h1>{artikel.title}</h1>
          <img src={artikel.imageUrl} alt="image" />
          <p>
            {artikel.newsSite}{" "}
            {new Date(artikel.publishedAt).toLocaleDateString()}
            <br />
            Source{" : "}
            <a href={artikel.url} target="_blank">
              {artikel.newsSite}
            </a>
          </p>
        </article>
      )}
    </section>
  );
}
