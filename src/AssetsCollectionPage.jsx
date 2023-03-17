import React from "react";
import data from "./Data.json";
import AssetContainer from "./AssetContainer";

const AssetsCollectionPage = ({ selected }) => {
  const task = data.tasks.find((itertask) => itertask.task_id === selected);
  return (
    <center>
      <div className="gridEnclosingContainer">
        <div className="gridContainer">
          {task.assets.map((asset, indx) => {
            return (
              <AssetContainer className="gridBox" asset={asset} key={indx} />
            );
          })}
        </div>
      </div>
    </center>
  );
};

export default AssetsCollectionPage;
