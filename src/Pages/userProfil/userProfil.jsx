import React, {Component} from "react";
import "./userProfil.css";

import OtherUser from '../../Components/RightProfil-otherUser/othetUsers';
import SideBar from '../../Components/sideBar/sideBar'
export default class UserProfil extends Component {
  render() {
    return (
      <div className='home'>
        <div className="LeftBar">
         <SideBar />
        </div>
        <div className="RightProfil">
          <OtherUser />
        </div>
      </div>
    );
  }
}
