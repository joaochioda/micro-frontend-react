import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

window.renderHeader = (containerId, history, user) => {
  ReactDOM.render(
    <App history={history} user={user} />,
    document.getElementById(containerId)
  );
};

window.unmountHeader = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById("Header-container")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
