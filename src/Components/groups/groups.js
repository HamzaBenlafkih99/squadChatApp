import React, { useEffect } from "react"
import "./groups.style.css"
import Group from "../Group/group"
function Groups() {
  return (
    <div className="groups">
      <h1 className="topGroup">Top Groups</h1>
      <Group />
      <Group />
      <Group />
    </div>
  )
}

export default Groups
