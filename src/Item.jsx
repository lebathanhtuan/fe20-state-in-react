import React from "react";

function Item(props) {
  return (
    <div className="item-wrapper">
      <div className="item-container">
        {props.isNew && <div className="new">NEW</div>}
        <div>{props.name}</div>
        <div>{props.price.toLocaleString()}₫</div>
        <button>Thêm vào giỏ</button>
      </div>
    </div>
  );
}

export default Item;
