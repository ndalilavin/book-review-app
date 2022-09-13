import React, { useState } from "react";
// import Input from "../input/Input";
import AddReviewCSS from "./AddReview.module.css";
import angry from "../../face/angry-face.png";
import happy from "../../face/happy-face-with-enlarged-eyes.png";
import disappoint from "../../face/disappointed-face.png";
import neutral from "../../face/neutral-face.png";
import smiling from "../../face/smiling-face-with-heart-eyes.png";
import image from "../../logo.svg";

function AddReview({user, onAddComment}) {
  const [rate, setRate] = useState(0);
  const [input, setInput] = useState("");
  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   setInput({ ...input, [name]: value });
  // };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
    if (input.comment != null && input.comment.trim() !== "" && rate!==0) {
      fetch("http://localhost:9292/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rate: rate,
          comment: input,
        }),
      })
      .then((r) => r.json())
      .then((newComment) => {
        onAddComment(newComment);
        setInput("");
        setRate(0);
      });
    }
    else{
      console.log("Error");
    }
  };
  console.log("rate", rate);
  return (
    <>
      <div className={AddReviewCSS.formContainer}>
        <div className={AddReviewCSS.book}>
          <img src={image} alt="ProductName" />
        </div>
        <form onSubmit={handleOnSubmit} className={AddReviewCSS.form}>
          <div className={AddReviewCSS.emojis}>
            <div className={AddReviewCSS.emoji} onClick={(e) => setRate(1)}>
              <img src={angry} alt="angry-face"></img>
            </div>
            <div className={AddReviewCSS.emoji} onClick={(e) => setRate(2)}>
              <img src={disappoint} alt="angry-face"></img>
            </div>
            <div className={AddReviewCSS.emoji} onClick={(e) => setRate(3)}>
              <img src={neutral} alt="angry-face"></img>
            </div>
            <div className={AddReviewCSS.emoji} onClick={(e) => setRate(4)}>
              <img src={happy} alt="angry-face"></img>
            </div>
            <div className={AddReviewCSS.emoji} onClick={(e) => setRate(5)}>
              <img src={smiling} alt="angry-face"></img>
            </div>
          </div>
          <div className={AddReviewCSS.inputs}>
            <div className={AddReviewCSS.input}>
              <input
                id="comment"
                type="text"
                name="comment"
                placeholder="Comment here..."
                value={input.comment}
                onChange={(e) =>  setInput(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
export default AddReview;
