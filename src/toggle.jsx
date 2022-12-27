import React, { useState } from "react";

const Toggle = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      id="react-testing-toggle"
      onClick={() => {
        setIsOpen((prevState) => !prevState);
        props.onChange(!isOpen);
      }}
    >
      {isOpen ? "turn off" : "trun on"}
    </button>
  );
};

export default Toggle;
