import React from "react";

export const InputBox = () => {
  return (
    <div>
      <label htmlFor="textinput" className="inputEncloser">
        <p>Sub Thread1</p>
        <textarea
          type="textarea"
          id="textinput"
          placeholder="Enter text Here"
        />
      </label>
    </div>
  );
};
