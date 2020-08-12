import React, { useEffect } from "react"
import "./group.style.css"
import Pic1 from "./img/first.jpg"
import Pic2 from "./img/second.jpg"
import Pic3 from "./img/third.jpg"

function Group() {
  return (
    <div className="topPages">
      <div className="All">
        <div className="twoPictures">
          <div className="firstPicture">
            <img src={Pic1} />
          </div>
          <div className="secondPictue">
            <img src={Pic2} />
          </div>
        </div>
        <div className="Picture">
          <img src={Pic3} />
        </div>
      </div>
      <div className="name">lorina</div>
    </div>
  )
}

export default Group
