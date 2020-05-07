import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);

  return (
    <div>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="Enter some text"
      />
      <br />
      {inputText}
      <hr></hr>
      <ul>
        {historyList.map((item) => {
          return <div>{item}</div>;
        })}
      </ul>
    </div>
  );
};

export default InputElement;
