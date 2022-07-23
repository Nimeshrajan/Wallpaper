import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="./images/4.jpg"
              width="500"
              height="600"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
            If you would like to share feedback on our existing editorial content, please email contact@wallpaper.com. 
            Kindly note that we are unable to review any editorial submissions, press releases, speculative applications or media partnership proposals sent to this email address.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;