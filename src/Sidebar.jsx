import React from "react";

function Sidebar(props) {
  const { isShowSidebar, setIsShowSidebar } = props;

  return (
    <div
      className="sidebar-overlay"
      style={{ display: isShowSidebar ? "flex" : "none" }}
    >
      <div className="sidebar-container">
        <div className="sidebar-content">
          Sidebar
          <button onClick={() => setIsShowSidebar(false)}>Close</button>
        </div>
      </div>
      <div
        className="sidebar-outside"
        onClick={() => setIsShowSidebar(false)}
      />
    </div>
  );
}

export default Sidebar;
