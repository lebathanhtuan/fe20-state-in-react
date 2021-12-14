import React from "react";

function Header(props) {
  return (
    <div className="header">
      <div>Logo</div>
      <div>
        Hello {props.name}, {props.address}
      </div>
    </div>
  );
}

export default Header;
