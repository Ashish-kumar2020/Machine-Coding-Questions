import { useState } from "react";

const LivePreview = () => {
  const [userName, setUserName] = useState("");
  return (
    <>
    <div>
      <label htmlFor="userName">UserName :</label>
      <input
        type="text"
        id="userName"
        placeholder="Enter your Name..."
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>
    <span>Live Preview : </span>
    <span>Hello! {userName || "Guest" }</span>
    </>
  );
};

export default LivePreview;
