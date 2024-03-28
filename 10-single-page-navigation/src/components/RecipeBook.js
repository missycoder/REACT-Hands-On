import React, { useState } from "react";
import Listing from "./Listing";
import AddNew from "./AddNew";

export default function RecipeBook() {
  const [active, setActive] = useState('listing');

  function handleTabClick(tabName) {
    setActive(tabName);
  }

  function renderContentChoice() {
    if (active === "listing") {
      return (
        <React.Fragment>
          <Listing />
          <div className="container">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link ${active === 'listing' ? 'active' : ''}`}
                  onClick={() => handleTabClick('listing')}
                >
                  Recipe
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${active === 'add' ? 'active' : ''}`}
                  onClick={() => handleTabClick('add')}
                >
                  Add New
                </button>
              </li>
            </ul>
          </div>
        </React.Fragment>
      );
    } else if (active === "add") {
      return (
        <React.Fragment>
          <AddNew />
        </React.Fragment>
      );
    }
  }

  return (
    <div>
      {renderContentChoice()}
    </div>
  );
}
