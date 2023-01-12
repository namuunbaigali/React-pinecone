import React from "react";
import Messagee from "../images/Messagee.svg";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainButton from "./MainButton";

export default function MoreFrom() {
  return (
    <Row className="pt-5">
      <Col xs={9}>
        <ul>
          <li>
            <h1>More from Cassie Kozyrkov</h1>
            <li>
              <p>
                Chief Decision Scientist, Google. ❤️ Stats, ML/AI, data, puns,
                art, theatre, decision science. All views are my own.
                twitter.com/quaesita
              </p>
            </li>
          </li>
        </ul>
      </Col>
      <Col xs={3}>
        <ul className="d-flex justify-content-between">
          <li>
            <MainButton> Follow </MainButton>
          </li>
          <li>
            <img src={Messagee} alt="" />
          </li>
        </ul>
      </Col>
    </Row>
  );
}
