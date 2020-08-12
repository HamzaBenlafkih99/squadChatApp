import React from "react";
import "./followingPage.css";
import SideBar from "../../Components/sideBar/sideBar"
import FollowingPost from '../../Components/followingPost/followingPost';
import Groups from "../../Components/groups/groups"

function FollowingPage() {
  return (
    <div className="containers">
      <SideBar />
      <FollowingPost />
      <Groups />
    </div>
  )
}

export default FollowingPage;
