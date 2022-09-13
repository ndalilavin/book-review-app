import React, { useState } from "react";
import UserCSS from "./User.module.css";
function User({ setUser }) {
    const [input, setInput] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("onSubmit");
        setUser(input)
      };

  return (
    
    <>
      <div className={UserCSS.container}>
        <form onSubmit={handleOnSubmit}  className={UserCSS.form}>
          <div className={UserCSS.inputs}>
            <input
              id="user"
              type="text"
              name="user"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />
            <span className={UserCSS.highlight}></span>
            <span className={UserCSS.bar}></span>
            <label htmlFor="user">Username</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
export default User;
