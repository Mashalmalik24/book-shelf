import React from "react";
import { Link } from "react-router-dom";

const DisplayBooks = ({ props, updateHandler }) => {
  const { id, imageLinks, status, title, authors } = props;
  const ALL_STATUS = ["Currently reading", "Want to read", "Read", "none"];

  return (
    <>
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover">
              {" "}
              <Link to={`/book/${id}`}>
                {" "}
                <img src={imageLinks} />{" "}
              </Link>
            </div>
            <div className="book-shelf-changer">
              <select
                value={status}
                onChange={(e) => {
                  updateHandler(e.target.value, id);
                }}
              >
                {ALL_STATUS.map((statusItem, statusIndex) => (
                  <option value={statusItem}>{statusItem}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    </>
  );
};
export default DisplayBooks;
