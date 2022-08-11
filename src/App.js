import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, Switch, useParams } from "react-router-dom";

import BookShelf from "./components/BookShelf";
import SingleBook from "./components/SingleBook";
function App() {
  return (
    <div className="App">
      <div className="list-books-title">
        <h1> Book Shelf</h1>
      </div>
      <Routes>
        <Route path="/" element={<BookShelf />} />
        <Route exact path="/book/:id" element={<SingleBook />} />
      </Routes>
    </div>
  );
}

export default App;
