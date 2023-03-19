import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import descriptionIcon from "./assets/description.svg";
import Collapse from "react-bootstrap/Collapse";

const AssetContainer = ({ assetInfo }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="masterConatiner">
      <div className="header">
        <div>{assetInfo.asset_title}</div>

        <Image
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="descriptionIcon"
          src={descriptionIcon}
        ></Image>
      </div>
      <div className="description">
        {/* {JSON.stringify(assetInfo)} */}

        <Collapse in={open}>
          <div id="example-collapse-text">
            <b>Description : </b>
            {assetInfo.asset_description}
          </div>
        </Collapse>
      </div>
      <div className="bodyContainer"></div>
    </div>
  );
};

export default AssetContainer;
