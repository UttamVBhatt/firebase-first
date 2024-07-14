import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function Cards({ name, imageURL, setImageURL, id }) {
  const [url, setUrl] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setImageURL(imageURL).then((url) => setUrl(url));
  }, [imageURL, setImageURL]);

  return (
    <Card style={{ width: "18rem" }} className="mt-5">
      <Card.Img
        style={{ width: "100%", height: "300px" }}
        variant="top"
        src={url}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={() => navigate(`books/view/${id}`)} variant="primary">
          View
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
