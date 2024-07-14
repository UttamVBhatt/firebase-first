import React, { useEffect, useState } from "react";
import { useFireBase } from "../contexts/firebase";
import Cards from "../components/Cards";
import CardGroup from "react-bootstrap/CardGroup";

function Home() {
  const { listAllBooks, getImageURL } = useFireBase();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    listAllBooks().then((data) => setBooks(data.docs));
  }, [listAllBooks]);

  return (
    <div className="container">
      {books.map((book) => (
        <CardGroup key={book.id}>
          <Cards {...book.data()} id={book.id} setImageURL={getImageURL} />
        </CardGroup>
      ))}
    </div>
  );
}

export default Home;
