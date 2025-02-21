import React from "react";

const Grocerycard = ({ Grocery }) => {
  return (
    <a href={Grocery?.action?.link}>
      <img
        className="w-40 h-50 object-cover"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          Grocery?.imageId
        }
      ></img>
    </a>
  );
};

export default Grocerycard;
