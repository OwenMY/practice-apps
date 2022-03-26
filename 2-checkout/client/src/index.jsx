import React from "react";
import { render } from "react-dom";

console.log(document.cookie)

render(
  <div>
    <p>Hello, World!</p>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
  </div>,
  document.getElementById("root")
);
