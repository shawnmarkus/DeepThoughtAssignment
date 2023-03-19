import React from "react";
import data from "./Data.json";
import AssetContainer from "./AssetContainer";
import Card from "react-bootstrap/Card";

const AssetsCollectionPage = ({ selected }) => {
  const task = data.tasks.find((itertask) => itertask.task_id === selected);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="enclosingBox">
        <Card bg="Light" style={{ width: "100%" }} className="mb-4">
          <Card.Body
            style={{
              backgroundColor: "#e9ecef",
              textAlign: "left",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                padding: "1rem 0",
              }}
            >
              {task.task_title}
            </div>
            <Card.Text
              style={{
                paddingBottom: "1rem",
              }}
            >
              {task.task_description}
            </Card.Text>
          </Card.Body>
        </Card>

        <div className="gridContainer">
          {task.assets.map((asset, indx) => {
            return <AssetContainer key={indx} assetInfo={asset} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AssetsCollectionPage;
