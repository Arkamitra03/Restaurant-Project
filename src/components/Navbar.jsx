import React, { useState } from "react";
import Menu from "./Menu";
function Navigation(props) {
  return (
    <nav className="navbar">
      <div className="btn-group">
        <button
          className="btn-group_item"
          name="Breakfast"
          onClick={() => {
            props.change("Breakfast");
            props.re();
          }}
        >
          Breakfast
        </button>
        <button
          className="btn-group_item"
          name="Lunch"
          onClick={() => {
            props.change("Lunch");
          }}
        >
          Lunch
        </button>
        <button
          className="btn-group_item"
          name="Evening"
          onClick={() => {
            props.change("Evening");
          }}
        >
          Evening
        </button>
        <button
          className="btn-group_item"
          name="Dinner"
          onClick={() => {
            props.change("Dinner");
          }}
        >
          Dinner
        </button>
        <button
          className="btn-group_item"
          name="All"
          onClick={() => {
            props.change("All");
          }}
        >
          All
        </button>
      </div>
    </nav>
  );
}
export default Navigation;
