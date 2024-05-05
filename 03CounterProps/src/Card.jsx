import React from "react";

const Card = (props) => {
  console.log(props.name, "prop");


  return (
    <section>
      <div className="card">
        <img src="public/image.png" alt="Avatar" className="avatar" />
        <div className="container">
          <h4>
            <b>{props.name}</b>
          </h4>
          {/* Architect & Engineer */}
          <p>{props.work || "software engineer"}</p>
          <p>{props.work ? props.work : "software engineer"}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
