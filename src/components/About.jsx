import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="./images/2.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
            An increasingly popular product is digital wallpaper. 
            This multipurpose product has a number of benefits, not least its unique surface which means it can be printed by the majority of printer types. 
            We use both solvent and UV printing techniques to recreate patterns, images and designs in eye-catching quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;