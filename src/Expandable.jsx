import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useRef } from "react";

function Expandable({ data, selected, updateSelected }) {
  const [show, setShow] = useState(true);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const OffcanvasRef = useRef();

  const handleClose = () => {
    setHasBeenClicked(!hasBeenClicked);
  };

  const hiddenwidth = {
    width: "100px",
  };
  const shownWidth = {
    width: "30%",
  };

  const colorStyle = {
    color: "#2c6ccb",
    borderColor: "#2c6ccb",
    borderWidth: "2px",
    borderStyle: "solid",
    width: "2rem",
    heigth: "1rem",
    padding: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const handleColor = (task_id) => {
    return selected === task_id ? colorStyle : null;
  };

  return (
    <>
      <Offcanvas
        ref={OffcanvasRef}
        style={hasBeenClicked ? hiddenwidth : shownWidth}
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header style={{ backgroundColor: "brown" }}>
          <Offcanvas.Title onClick={handleClose}>Expand</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {data.tasks.map((task, idx) => {
            return !hasBeenClicked ? (
              <div>
                <b>{task.task_title}</b>
                <ul>
                  {task.assets.map((asset, key) => {
                    return <li key={key}>{asset.asset_title}</li>;
                  })}
                </ul>
              </div>
            ) : (
              <center>
                <div
                  onClick={updateSelected(task.task_id)}
                  style={handleColor(task.task_id)}
                >
                  {idx + 1}
                </div>
              </center>
            );
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Expandable;
