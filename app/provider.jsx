import React from "react";

function Provider({ Children }) {
  return (
    <div>
      <header />
      {Children}
    </div>
  );
}

export default Provider;
