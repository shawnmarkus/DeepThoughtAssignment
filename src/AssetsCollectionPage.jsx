import React from "react";
import data from "./Data.json";
import AssetContainer from "./AssetContainer";

const AssetsCollectionPage = ({ selected }) => {
  const task = data.tasks.find((itertask) => itertask.task_id === selected);
  return (
    <div>
      {JSON.stringify(task)}

      {task.assets.map((asset, indx) => {
        return <AssetContainer asset={asset} key={indx} />;
      })}
    </div>
  );
};

export default AssetsCollectionPage;
