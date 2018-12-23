import React from "react";
const SearchButton = () => {
  return (
    <div>
      <button
        style={{ height: "50px", borderStyle: "none", marginTop: "10px" }}
      >
        Google खोजी
      </button>
      <p>
        Google यी भाषामा उपलब्ध छ: <a href="#">English</a>
      </p>
    </div>
  );
};

export default SearchButton;
