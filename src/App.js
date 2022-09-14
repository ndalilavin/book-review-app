// import logo from './logo.svg';
import "./App.css";
import React, { useState ,useEffect} from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/home/Hero";
import AddReview from "./components/addReview/AddReview";
import { Route, Routes } from "react-router-dom";
import User from "./components/input/User";

function App() {
  const [user, setUser] = useState("");
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then((r) => r.json())
      .then((reviews) => setReviews(reviews));
  }, []);
  console.log("reviews", reviews);

  function handleAddReview(newReview) {
    setReviews([...reviews, newReview]);
  }
  return (
    <div className="App">
      {!user ? (
        <User setUser={setUser} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route exact path="/add-review/:id" element={<AddReview user={user} reviews= {reviews} onAddReview={handleAddReview}/>} />
          </Routes>
        </>
      )}

      {/* <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/add-review/:id" element={<AddReview />} />
      </Routes> */}
    </div>
  );
}

export default App;
