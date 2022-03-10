import React from "react";
import "./singlepost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostwrap">
        <img
          src="https://res.cloudinary.com/dvxr1zote/image/upload/v1604393408/iuwo8olqqtvhs1jc97ou.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="title">
          Lorem ipsum dolor.
          <div className="edit">
            <i className="singleIcon fa-solid fa-pen-to-square"></i>
            <i className="singleIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostinfo">
          <span className="author">
            Author <b>Tonnie</b>
          </span>
          <span className="date">2 hours ago</span>
        </div>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          voluptatibus sapiente pariatur modi minima, maxime dicta quidem
          consequatur quasi odit cupiditate velit. Cupiditate voluptatibus
          aspernatur quis architecto temporibus porro vel.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          voluptatibus sapiente pariatur modi minima, maxime dicta quidem
          consequatur quasi odit cupiditate velit. Cupiditate voluptatibus
          aspernatur quis architecto temporibus porro vel.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          voluptatibus sapiente pariatur modi minima, maxime dicta quidem
          consequatur quasi odit cupiditate velit. Cupiditate voluptatibus
          aspernatur quis architecto temporibus porro vel.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          voluptatibus sapiente pariatur modi minima, maxime dicta quidem
          consequatur quasi odit cupiditate velit. Cupiditate voluptatibus
          aspernatur quis architecto temporibus porro vel.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          voluptatibus sapiente pariatur modi minima, maxime dicta quidem
          consequatur quasi odit cupiditate velit. Cupiditate voluptatibus
          aspernatur quis architecto temporibus porro vel.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          voluptatibus sapiente pariatur modi minima, maxime dicta quidem
          consequatur quasi odit cupiditate velit. Cupiditate voluptatibus
          aspernatur quis architecto temporibus porro vel.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
