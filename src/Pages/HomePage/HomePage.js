import React from "react"
import "./HomePage.style.css"
import SideBar from "../../Components/sideBar/sideBar"
import CenterPage from "../../Components/centerPage/centerPage"
import Groups from "../../Components/groups/groups"

function HomePgae() {
  return (
    <div className="containers">
      <SideBar />
      <CenterPage />
      <Groups />
    </div>
  )
}

export default HomePgae
