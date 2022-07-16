import React from "react";
import "./Do.css";

const Do = () => {
  return (
    <div  id="WhatIDo" className="do-wrapper">
      <div className="d">
        <h1 className="d-head">
          What I <span className="primary">Do</span>
        </h1>

        <div className="d-container">
          <div className="d-box">
            <div className="d-content">
              <i className="fas fa-graduation-cap icon"></i>
              <h3 className="d-heading">Student</h3>
              <p className="d-info">
                I'm currently a final year student pursuing my degree in
                Electronics and Communication and apart from my course I have a
                keen interest in problem solving.{" "}
              </p>
            </div>
          </div>
          <div className="d-box">
            <div className="d-content">
              <i className="fas fa-code icon"></i>
              <h3 className="d-heading">Front-End Development</h3>
              <p className="d-info">
                I like to craft solid and scalable frontend products with great
                user experiences.{" "}
              </p>
              <p className="d-info">
                <span className="primary"> &lt;code&gt;</span> I design and code
                beautifully simple things{" "}
                <span className="primary"> &lt;/code&gt;</span>
              </p>
            </div>
          </div>
          <div className="d-box">
            <div className="d-content">
              <i className="fas fa-pen icon"></i>
              <h3 className="d-heading">UI/UX Designer</h3>
              <p className="d-info">
                I enjoy creating user-centric, simple and user effective designs
                and I love to explore complex problems in search of delightful
                user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Do;
