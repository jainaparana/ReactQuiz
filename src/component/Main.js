import React from "react";
function Main({ children }) {
  return <div>{children}</div>;
}

export default React.memo(Main);
