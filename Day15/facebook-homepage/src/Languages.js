import React from "react";
import './main.css';
const Languages = () => {
  return (
    <div>
      <ul id="languages">
        <li>English (UK)</li>
        <li><a href="#">नेपाली</a></li>
        <li><a href="#">हिन्दी</a></li>
        <li><a href="#">Español</a></li>
        <li><a href="#">Português (Brasil)</a></li>
        <li><a href="#">日本語</a></li>
        <li><a href="#">Français (France)</a></li>
        <li><a href="#">Deutsch</a></li>
        <li><a href="#">Italiano</a></li>
        <li><a href="#">العربية</a>
    </li>
        <li><a href="#">中文(简体)</a></li>
        <li><button style={{fontSize: "14px"}}>+</button></li>
      </ul>
    </div>
  );
};

export default Languages;
