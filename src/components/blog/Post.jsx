import React, { useEffect } from "react";
import { useParams } from "react-router";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">Our products Description</h1>
        <h6 className="mb-5">Wallpaper </h6>
        <p>
        A wallpaper, or desktop background, is a background image that covers the desktop of a computer or other device. 
        Most operating systems provide a default wallpaper and allow you to choose your own.
        </p>
        <p>
        Wallpapers can be any type of image, but most users prefer a clean background that is not too "busy." The simpler the wallpaper image is, the easier it is to view icons and windows on the desktop. 
        Some people prefer realistic backgrounds, while others opt for computer-generated images.
        </p>
      </div>
    </div>
  );
}

export default Post;