import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFireBase } from "../contexts/firebase";

const ListingPage = () => {
  const [name, setName] = useState("");
  const [isbnNumber, setIsBnNumber] = useState("");
  const [price, setPrice] = useState("");
  const [coverPic, setCoverPic] = useState("");
  const { handleCreateNewListing } = useFireBase();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleCreateNewListing(name, isbnNumber, price, coverPic);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
        <Form.Label>Book's Name</Form.Label>
        <Form.Control
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter Book's Name"
        />
      </Form.Group>

      <Form.Group className="mb-3 mt-5" controlId="formBasicPassword">
        <Form.Label>ISBN</Form.Label>
        <Form.Control
          onChange={(e) => setIsBnNumber(e.target.value)}
          value={isbnNumber}
          type="text"
          placeholder="ISBN Number"
        />
      </Form.Group>

      <Form.Group className="mb-3 mt-5" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="text"
          placeholder="Price"
        />
      </Form.Group>

      <Form.Group className="mb-3 mt-5" controlId="formBasicPassword">
        <Form.Label>Cover Pic</Form.Label>
        <Form.Control
          onChange={(e) => setCoverPic(e.target.files[0])}
          type="file"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
};

export default ListingPage;
