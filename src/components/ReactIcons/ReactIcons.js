import "./reactIcons.css";
import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGithub,
  FaGitlab,
  FaStackOverflow,
  FaSlack,
} from "react-icons/fa";
import { DiJavascript1, DiMongodb, DiMysql } from "react-icons/di";
import {
  SiHandlebarsdotjs,
  SiBulma,
  SiInsomnia,
  SiHeroku,
} from "react-icons/si";

const size = "50";
const marginRight = "2rem";

//Html, Css, JS,

const ReactIcons = () => {
  return (
    <div className="reactIconsContainer">
      <ul className="reactIconsUL">
        <li className="reactIconsLI">
          <FaHtml5
            size={size}
            style={{
              color: "#fff",
              hover: "HTML 5",
              marginRight: { marginRight },
            }}
          />
        </li>
        <li>
          <FaCss3Alt
            size={size}
            style={{ color: "#fff", marginRight: { marginRight } }}
          />
        </li>
        <li>
          <DiJavascript1
            size={size}
            style={{ color: "#fff", marginRight: { marginRight } }}
          />
        </li>
        <li>
          <FaReact
            size={size}
            style={{ color: "#fff", marginRight: { marginRight } }}
          />
        </li>
        <li>
          <DiMongodb
            size={size}
            style={{ color: "#fff", marginRight: { marginRight } }}
          />
        </li>
        <li>
          <DiMysql
            size={size}
            style={{ color: "#fff", marginRight: { marginRight } }}
          />
        </li>
        <li>
          <FaNodeJs
            size={size}
            style={{ color: "#fff", marginRight: { marginRight } }}
          />
        </li>
        <li>
          <SiHandlebarsdotjs
            size={size}
            style={{ color: "#fff", marginRight: { marginRight } }}
          />
        </li>
        <li>
          <FaBootstrap
            size={size}
            style={{ color: "#fff", marginRight: { marginRight } }}
          />
        </li>
        <li>
          <SiBulma
            size={size}
            style={{ color: "#fff", marginRight: { marginRight } }}
          />
        </li>
        <li>
          <FaGithub
            size={size}
            style={{ color: "#fff", marginRight: { marginRight } }}
          />
        </li>
        <li>
          <FaGitlab
            size={size}
            style={{ color: "#fff", marginRight: { marginRight } }}
          />
        </li>
        <li>
          <SiInsomnia
            size={size}
            style={{ color: "#fff", marginRight: { marginRight } }}
          />
        </li>
        <li>
          <SiHeroku
            size={size}
            style={{ color: "#fff", marginRight: { marginRight } }}
          />
        </li>
        <li>
          <FaStackOverflow
            size={size}
            style={{ color: "#fff", marginRight: { marginRight } }}
          />
        </li>
        <li>
          <FaSlack
            size={size}
            style={{ color: "#fff", marginRight: { marginRight } }}
          />
        </li>
      </ul>
    </div>
  );
};

export default ReactIcons;
