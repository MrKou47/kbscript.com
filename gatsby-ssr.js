const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="kobbe-tracker"
      src="https://app.kobbe.io/tracker.js"
      data-token="9870c03b.e2yDmurynmsmFchWYZ7U9Fpj3iT4BRWw"
      defer
    />,
  ]);
};
