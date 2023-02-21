import React from "react";
function Card(props) {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <p className="no">{props.id}</p>
                    <div className="card-type">{props.category}</div>
                    <br/><br/>
                    <h1>{props.name}</h1>
                    <p className="description-card">{props.description}</p>
                    <div className="card-read">Read</div>
                </div>

                <img
                    src={props.image}
                    alt="food image" className="card-media"
                />
                <div className="card-tag  subtle">Order Now</div>
            </div>
        </div>
    );
}
export default Card;
