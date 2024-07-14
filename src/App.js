//Components
import MyNav from "./components/Nav";

//Pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import ListingPage from "./pages/ListingPage";
import Home from "./pages/Home";
import BookDetails from "./pages/Details";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <MyNav />
      <div className="App container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book/list" element={<ListingPage />} />
          <Route path="/books/view/:bookId" element={<BookDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
