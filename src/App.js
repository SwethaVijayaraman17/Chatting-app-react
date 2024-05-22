import React, { useState } from 'react';
import './App.css';
import ChattingLayout from './ChattingLayout';

function App() {
  const [msgDetails, setMsgDetails] = useState([
    {
      name: "Person 1",
      msg: 'Hi Buddy!'
    },
    {
      name: "Person 2",
      msg: 'Hello!'
    }
  ]);

  const [active, setActive] = useState('Person 1');
  const [input, setinput] = useState('');
  console.log(msgDetails,input, 'msg');
  return (
    <div className="App">
      <h1>Chatting App</h1>
      <ChattingLayout
        msgDetails={msgDetails}
        active={active}
        setMsgDetails={setMsgDetails}
        setActive={setActive}
        input={input}
        setinput={setinput}
      />
    </div>
  );
}

export default App;
