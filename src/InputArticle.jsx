import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const InputArticle = () => {
  const [value, setValue] = useState("");

  return (
    <div className="d-flex flex-column px-5">
      <label htmlFor="inputText" className="pb-2">
        <b>Title </b>
      </label>
      <input
        type="text"
        name="inputText"
        id="inputText"
        style={{
          border: "none",
          padding: "0.5rem 1rem ",
          boxShadow: "0 0 10px 10px #f0f0f0",
          borderRadius: "10px",
        }}
      />
      <label htmlFor="contentBox" className="pt-5 pb-3">
        <b>Content </b>
      </label>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
};

export default InputArticle;
