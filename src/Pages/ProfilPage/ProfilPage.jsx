import React, {Component} from "react";
import "./ProfilPage.css";

import RightProfil from "../../Components/RightProfil/RightProfil";
import SideBar from '../../Components/sideBar/sideBar'
export default class ProfilPage extends Component {
  render() {
    return (
      <div className='home'>
        <div className="LeftBar">
         <SideBar />
        </div>
        <div className="RightProfil">
          <RightProfil />
        </div>
      </div>
    );
  }
}
