import React, { useState } from "react";
import "./App.css";

function App() {
  const [chat, setChat] = useState([]);
  const [value, setValue] = useState("");

  const handleClick = () => {
    let abc = [...chat];
    console.log(value);
    if (value.length !== 0) {
      abc.push(value);
      setChat(abc);
    }
  };

  return (
    <div className="App">
      <div className="header">ReactChatApp</div>
      <div className="containerApp">
        <input
          type="text"
          className="chatInput"
          placeholder="lets chat here...."
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={() => handleClick()}>send</button>
      </div>
      {chat.map((item, index) => {
        if (index % 2 === 0) {
          return <div className="chatleft">{item}</div>;
        } else {
          return <div className="chatright">{item}</div>;
        }
      })}
    </div>
  );
}

export default App;
