import React from "react";

function Layout(props) {
    return (
      <div>
          <h1>Images Upload Service</h1>
          {props.children}
      </div>
    );
}
export default Layout;