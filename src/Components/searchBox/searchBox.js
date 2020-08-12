import React from "react"
import "./searchBox.style.css"
function SearchBox() {
  return (
    <div className="searchBox">
      <div className="search__container">
        <p className="search__title">Go ahead, hover over search</p>
        <input className="search__input" type="text" placeholder="Search" />
      </div>
    </div>
  )
}

export default SearchBox
