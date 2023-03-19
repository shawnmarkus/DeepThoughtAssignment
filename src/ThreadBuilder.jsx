import React from "react";
import { InputBox } from "./InputBox";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import spa from "./assets/spa.svg";
import bulb from "./assets/bulb.svg";
import questionBox from "./assets/chat-question-icon.svg";
import commentBox from "./assets/comment-box-icon.svg";

const ThreadBuilder = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Thread A</Accordion.Header>
        <Accordion.Body>
          <div className="threadBuilderContainer">
            <div className="thread1">
              <InputBox />
              <div className="d-flex justify-content-end py-3">
                <Image className="mx-1 my-4  " src={spa}></Image>
                <Image className="mx-1 my-4  " src={commentBox}></Image>
                <Image className="mx-1 my-4  " src={questionBox}></Image>
                <Image className="mx-1 my-4  " src={bulb}></Image>
              </div>
              <Button variant="primary">Submit</Button>
            </div>
            <div className="interpretation">
              <InputBox />
              <div className="d-flex my-4 justify-content-center  ">
                <select className="mx-2" name="category" id="category">
                  <option value="" selected disabled>
                    Select Category
                  </option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>{" "}
                </select>

                <select className="mx-2" name="process" id="process">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>

            <div className="summary">
              <InputBox className="fullsize" />
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ThreadBuilder;
