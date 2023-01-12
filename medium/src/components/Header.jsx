import React from "react";
import Twitter from "../images/Twitter.svg";
import Facebook from "../images/Facebook.svg";
import Linkedin from "../images/Linkedin.svg";
import Link from "../images/Link.svg";
import GoyEgc from "../images/GoyEgc.svg";
import Hand from "../images/hand.svg";
import Comment from "../images/Comment.svg";
import Share from "../images/Share.svg";
import Save from "../images/Save.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
  return (
    <Container xs>
      <Row>
        <Col xs={7} className="d-flex">
          <img
            src="https://placeimg.com/150/100/nature"
            alt=""
            className="img-fluid p-0 rounded-circle "
          />
          <ul>
            <li> Cassie Kozyrkow</li>
            <li> Dec 27, 2022 · 9 min read </li>
          </ul>
        </Col>
        <Col xs={5} d-flex justify-content-between>
          <ul className="d-flex justify-content-center ">
            <li>
              <img src={Twitter} alt="" className="mx-2" />
            </li>
            <li>
              <img src={Facebook} alt="" className="mx-2" />
            </li>
            <li>
              <img src={Linkedin} alt="" className="mx-2" />
            </li>
            <li>
              <img src={Link} alt="" className="mx-2" />
            </li>
          </ul>
        </Col>
      </Row>

      <h1>The best New Year’s resolutions you can make</h1>
      <h4 className="text-secondary">
        Resolutions that actually work, according to a decision scientist
      </h4>
      <p className="py-3">
        Happy almost-2023! Chances are that you’re contemplating making some New
        Year’s resolutions, so let’s get you set up for success with a few
        resolutions that will unlock the best version of you.
      </p>
      <img src={GoyEgc} alt="" className="img-fluid" />
      <p className="text-secondary text-center">
        {" "}
        All copyright belongs to the author.{" "}
      </p>
      <h3>#1 — Resolve to stop borrowing resolutions</h3>
      <h5>
        Different people are different, so what works for you might not be what
        works for anyone else.
      </h5>
      <p className=" py-4">
        Understanding this is the single biggest step you can take in the
        direction of success. That’s precisely why I’m not going to do the
        standard guru thing of suggesting you copy my exact wellness plan after
        proving to you that I have a stack of credentials (I do) and I’m in
        shape (I am). My plan fits me, but you need a plan that fits you.
      </p>
      <h4>Quit borrowing other people’s resolutions</h4>
      <p>
        Whenever you’re tempted to copy your favorite celeb’s latest health
        plan, take a moment to think about some potential reasons that person is
        able to stick with it (assuming they are) which you might not know
        about. Do they have a private chef who prevents them from making food
        decisions? Do they secretly loooove cabbage? Is their job less stressful
        than yours? And so on.
      </p>

      <div>
        <Row>
          <Col xs={3} className="d-flex justify-content-between">
            <ul>
              <li>
                <img src={Hand} alt="" className="mx-2" />
                1.5k
              </li>
            </ul>
            <ul>
              <li>
                <img src={Comment} alt="" className="mx-2" />
                30
              </li>
            </ul>
          </Col>

          <Col xs={6}></Col>

          <Col xs={3} className="d-flex justify-content-between">
            <ul>
              <li>
                <img src={Share} alt="" />
              </li>
            </ul>
            <ul>
              <li>
                <img src={Save} alt="" />
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
