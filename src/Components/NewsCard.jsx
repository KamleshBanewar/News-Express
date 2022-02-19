import React from "react";
import "./NewsCard.css";
function NewsCard(props) {
  // console.log(props.newssource);
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card_header">{props.newssource}</div>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          {/* button  */}
          <a
            rel="noreferrer"
            href={props.link}
            target="_blank"
            className="btn btn-sm btn-dark my-3"
          >
            Read More...
          </a>
          <div>On {new Date(props.date).toGMTString()}</div>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
