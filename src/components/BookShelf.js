import React, { useState } from "react";
import { MY_BOOKS } from "../data";
import DisplayBooks from "./DisplayBooks";

const INITIAL_STATE = ["Currently reading", "Want to read", "Read"];
const BookShelf = () => {
  const [allBooksState, setAllBooksState] = useState(MY_BOOKS);

  const updateHandler = (value, index) => {
    let tempArray = allBooksState.map((item) => {
      if (item.id === index) {
        return {
          ...item,
          status: value,
        };
      }
      return {
        ...item,
      };
    });
    setAllBooksState(tempArray);
  };
  return (
    <>
      <div className="bookshelf">
        {INITIAL_STATE.map((items) => (
          <>
            <div className="bookshelf-title">{items}</div>
            <div className="bookshelf-books">
              <div className="books-grid">
                {allBooksState.map((item) => {
                  if (item.status === items) {
                    return (
                      <DisplayBooks
                        updateHandler={updateHandler}
                        props={item}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default BookShelf;
