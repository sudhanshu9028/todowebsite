import React from "react";

export const About = () => {
  const aboutStyle = {
    minHeight: "86vh",
  };
  const quote = {
    marginTop: "60vh",
  };
  return (
    <div style={aboutStyle}>
      <h6 className="container my-3">
        <mark>About Todos List</mark>
      </h6>
      <p className="container lead">
        You can add and delete your todos item on this page.
      </p>
      <div style={quote}>
        <figure className="text-center">
          <blockquote className="blockquote">
            <p>
              ”If you win, you live. If you lose, you die. If you don’t fight,
              you can’t win! FIGHT! FIGHT!!!”
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            <cite title="Source Title">Eren Yeager</cite>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};