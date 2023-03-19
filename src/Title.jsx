import React from "react";
import Button from "react-bootstrap/Button";
const Title = ({ title }) => {
  return (
    <center>
      <div className="w-75 ">
        <div className="titleStyle">
          <div>{title}</div>
          <div>
            <Button variant="primary">Submit task</Button>{" "}
          </div>
        </div>
      </div>
    </center>
  );
};

export default Title;
