import React from "react";

function Header(props) {
  const { setIsShowSidebar, name, address } = props;

  return (
    <div className="header">
      <div>
        <button onClick={() => setIsShowSidebar(true)}>Menu</button>
        Logo
      </div>
      <div>
        Hello {name}, {address}
      </div>
    </div>
  );
}

export default Header;
