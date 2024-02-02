import React from "react";

function About() {
  const imageSrc = "https://via.placeholder.com/215";
  const aboutText = "Your blog description goes here.";

  return (
    <aside>
      <img src={imageSrc} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
