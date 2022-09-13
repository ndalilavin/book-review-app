import React from "react";
import UserCSS from "./User.module.css";
function User({ user, setUser }) {
  return (
    <>
      <div className={UserCSS.container}>
        <div className={UserCSS.form}>
          <div className={UserCSS.inputs}>
            <input
              id="user"
              type="text"
              name="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
            <span className={UserCSS.highlight}></span>
            <span className={UserCSS.bar}></span>
            <label htmlFor="user">Username</label>
          </div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </>
  );
}
export default User;
