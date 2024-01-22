import { useState } from "react";

const Item = (props) => {
  const { name, src, desc } = props.info;
  const [count, setCount] = useState(0);

  return (
    <div className="item">
      <img src={src} alt={name} />
      <div className="item-info">
        <h2>{name}</h2>
        <p>{desc}</p>
      </div>
      <div className="item-quantity">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="ui-button"
        >
          +
        </button>
        <h3 className="item-total">{count}</h3>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
          disabled={!count}
          className="ui-button"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Item;