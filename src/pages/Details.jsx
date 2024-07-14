import React, { useEffect, useState } from "react";
import { useFireBase } from "../contexts/firebase";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { getBookById, getImageURL } = useFireBase();
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [url, setURL] = useState("");

  useEffect(
    function () {
      getBookById(bookId).then((book) => setBook(book));
    },
    [bookId, getBookById]
  );

  const data = book?.data();

  console.log(data);

  useEffect(() => {
    getImageURL(data?.imageURL).then((url) => setURL(url));
  }, [getImageURL, book, data]);

  return (
    <div className="container">
      <h3 className="mt-3 mb-2">{data?.name}</h3>
      <img
        className="mt-5"
        src={url}
        width={"500px"}
        alt={book?.data().name}
        height={"500px"}
      />
    </div>
  );
}

export default BookDetails;
