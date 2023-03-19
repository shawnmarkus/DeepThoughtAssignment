import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import descriptionIcon from "./assets/description.svg";
import Collapse from "react-bootstrap/Collapse";
import YouTube from "react-youtube";
import ThreadBuilder from "./ThreadBuilder";
import InputArticle from "./InputArticle";
import Article from "./Article";

const AssetContainer = ({ assetInfo }) => {
  const [open, setOpen] = useState(false);
  const opts = { width: "100%" };
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
      <div className="bodyContainer">
        {assetInfo.asset_type === "display_asset" ? (
          assetInfo.asset_content_type === "video" ? (
            <YouTube
              videoId={assetInfo.asset_content}
              opts={opts}
              // onReady={this._onReady}
            />
          ) : assetInfo.asset_content_type === "article" ? (
            <Article></Article>
          ) : null
        ) : assetInfo.asset_type === "input_asset" ? (
          assetInfo.asset_content_type === "article" ? (
            <InputArticle></InputArticle>
          ) : assetInfo.asset_content_type === "threadbuilder" ? (
            <ThreadBuilder />
          ) : null
        ) : null}
      </div>
    </div>
  );
};

export default AssetContainer;
