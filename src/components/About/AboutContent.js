import React from "react";
import "./AboutStyles.css";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Hello, My Name is Bryan Wilkerson</h1>
        <p>
          Im a full stack developer and Small Business Owner. I pick up things
          pretty fast and learn best by doing things or seeing them being done.
          I am a recent graduate from The University of Kansas Full Stack
          Developer Bootcamp.I joined the bootcamp to be able to save
          money/customize my own website for my business, but fell in love with
          programing and decided I wanted to do it full time.
        </p>
        <p>
          This Portfolio showcases some of the projects that I complected during
          my time with The University of Kansas Full Stack Developer Bootcamp.
        </p>
        <p>
          I was born and raised in Joplin MO. I Spent 6 Years in the US Army, My
          MOS was 25U "Signal Support Specialist". I have owned 2 Small
          businesses called JFW Auto and USA Mattress. Unfortunately my first
          business had a fire during a tornado in 2019 and we ended up not
          reopening because of covid and the uncertainty on what was going to
          happen. My first project will be creating my own website for my
          company and then I want to work on a site to help support local
          business in the fourstates area. Feel free to reach out to me with the
          contact information at the bottom of the page if you want to know
          more!
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutContent;
