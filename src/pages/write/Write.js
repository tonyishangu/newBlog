import React from "react";
import "./write.css";

const Write = () => {
  return (
    <div className="write">
        <img className="img" src="https://res.cloudinary.com/dvxr1zote/image/upload/v1604393408/iuwo8olqqtvhs1jc97ou.jpg" alt="" />
      <form className="writeForm">
        <div className="formGroup">
            <label htmlFor="fileInput">
                <i className="icon fas fa-plus"></i>    
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder="Title" className="input" autoFocus={true} />
        </div>
        <div className="formGroup">
            <textarea placeholder="Tell your story..." type="text" className="input text"></textarea>    
        </div>
        <button className="submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
