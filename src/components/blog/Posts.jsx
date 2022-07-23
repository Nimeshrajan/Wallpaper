import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="home">
      <div class="container">
        <Link to="/blog/this-is-a-post-title">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="./images/3.jpg"
                width="500"
                height="500"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Product Description</h1>
              <p>
              The history of wallpaper is not simply a history of ornamental patterns and designs. 
              It is also a fascinating record of technological ingenuity and changes in patterns of consumption and domestic taste.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;