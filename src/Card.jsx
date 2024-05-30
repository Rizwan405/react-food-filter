import { useState } from "react";

function Card(props) {
  const [val, setVal] = useState(false);
  return (
    <div>
      <article>
        <div className="image__wrapper">
          <img src={props.content.image} className="imge" alt="img1" />
        </div>
        <div className="card__content">
          <h3 className="card__heading">{props.content.name}</h3>
          <p className="price">
            <span>
              <i className="ri-money-euro-circle-line icon"></i>
            </span>
            <span>{props.content.price}</span>
          </p>
          {val ? <p>{props.content.long}</p> : <p>{props.content.short}</p>}
          <button className="btn" onClick={() => setVal(!val)}>
            {val ? "read less" : "read more"}
          </button>
        </div>
      </article>
    </div>
  );
}

export default Card;
// implement red more and less button
