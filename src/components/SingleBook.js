import React from "react";
import { useParams } from "react-router-dom";
import { MY_BOOKS } from "../data";
const SingleBook = () => {
  let { id } = useParams();
  const SingleBook = MY_BOOKS.find((item) => item.id === id);
  return (
    <>
      <div className="books-grid">
        <div className="book">
          <div className="book-top">
            <div className="book-cover">
              {" "}
              <img src={SingleBook.imageLinks} />{" "}
            </div>
          </div>
          <div className="book-title">{SingleBook.title}</div>{" "}
          <div className="book-authors">{SingleBook.authors}</div>
        </div>
      </div>
      <div className="books-description">
      <h1> Description</h1>
      <div>{SingleBook.description}</div>
      </div>
    </>
  );
};

export default SingleBook;
