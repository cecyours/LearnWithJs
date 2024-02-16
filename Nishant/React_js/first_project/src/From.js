import React, { useState } from "react";

export default function From() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");
  function getFromData(e) {
    console.log(name, tnc, interest);
    e.preventDefault();
  }
  return (
    <div>
      <form id="from-actions" onSubmit={getFromData}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <select
          name="Select Option"
          id="selector"
          onChange={(e) => setInterest(e.target.value)}
        >
          <option value="Marvel">Marvel</option>
          <option value="DC">DC</option>
        </select>
        <br /> <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Accept Terms and condition</span>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


