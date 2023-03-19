import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

const Article = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <b>Introduction</b>
          </Accordion.Header>
          <Accordion.Body>
            <div className="p-4">
              <p>The 4SA Method, Hoe to bring a idea into process?</p>

              <div className="d-flex justify-content-end">
                <Button variant="">
                  <b>See More</b>
                </Button>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Thread A</Accordion.Header>
          <Accordion.Body>
            <p>
              How are you going to develop your strategy? Which method are you
              going to use develop a strategy? What if the project is lengthy?
            </p>

            <div className="d-flex justify-content-end">
              <Button variant="">
                <b>See More</b>
              </Button>
            </div>

            <div>
              <b className="border p-2 my-2 d-block">Example</b>

              <p className="p-3">
                You have a concept; How will you put it into a process
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Article;
