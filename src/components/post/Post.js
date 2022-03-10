import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://res.cloudinary.com/dvxr1zote/image/upload/v1604393408/iuwo8olqqtvhs1jc97ou.jpg"
        alt="image"
      />
      <div className="postInfo">
        <div className="postCategory">
          <span className="postCat">Tech</span>
          <span className="postCat">Music</span>
        </div>
        <span className="postTitle">
          <Link to="/post/123" className="link">Lorem ipsum dolor sit amet</Link>  
        </span>
        <hr />
        <span className="postDate">2 Hours ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
};

export default Post;
