import React, { useState, useReducer } from "react";
import { MY_BOOKS } from "../data";
import DisplayBooks from "./DisplayBooks";

const INITIAL_STATE = ["Currently reading", "Want to read", "Read"];

const reducer = (state, action) => {
  switch(action.type){
    case "add":
      let temp = [...state]
      console.log(temp)
      temp[action.payload.index]={...temp[action.payload.index], status: action.payload.value}
      console.log(temp)
      return temp
    default :
        return state
    }
}

const BookShelf = () => {
  const [state, dispatch] = useReducer(reducer, MY_BOOKS)
  const updateHandler = (value, index) => {

    for(var i = 0; i < state.length; i++){
      if(state[i].id === index){
        dispatch({type: "add", payload: {value:value, index:i} })
      }else{
        dispatch({type: "", payload: value })
      }
    }
  };
  return (
    <>
      <div className="bookshelf">
        {INITIAL_STATE.map((items) => (
          <>
            <div className="bookshelf-title">{items}</div>
            <div className="bookshelf-books">
              <div className="books-grid">
                {state?.map((item) => {
                  if (item.status === items) {
                    return (
                      <DisplayBooks
                        updateHandler={updateHandler}
                        book={item}
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
}

export default BookShelf


