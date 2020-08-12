import React, {Component} from "react";
import "./ImageProfil.css";
import PictureOne from "./Images/b5ff2c1429e1d5c7c3fc4b135432eaec.jpg";
import PintureTwo from "./Images/download.jpg";
import PictureThree from "./Images/coolphoto1b.jpg";
import PictureFour from "./Images/download (1).jpg";
import PictureFive from "./Images/final-result-2.jpg";
import PictureSix from "./Images/photoshop_effect_1-32.jpg";
export default class ImageProfil extends Component {
  render() {
    return (
      <div className="ImageProfil container my-container">
        <div className="ChoiceImage row my-row container-fluid">
          <div col-md-3 col-sm-2>
            <a href="#">Featured</a>
          </div>
          <div col-md-3 col-sm-2>
            <a href="#">NeonCity</a>
          </div>
          <div col-md-3 col-sm-2>
            <a href="#">Art</a>
          </div>
        </div>

        <div className="Images row my-row">
          <div className="PictureProfil col-md-4 col-sm-6">
            <img src={PictureOne} />
          </div>
          <div className="PictureProfil col-md-4 col-sm-6">
            <img src={PintureTwo} />
          </div>
          <div className="PictureProfil col-md-4 col-sm-6">
            <img src={PictureThree} />
          </div>

          <div className="PictureProfil col-md-4 col-sm-6">
            <img src={PictureFour} />
          </div>
          <div className="PictureProfil col-md-4 col-sm-6">
            <img src={PictureFive} />
          </div>
          <div className="PictureProfil col-md-4 col-sm-6">
            <img src={PictureSix} />
          </div>
        </div>
      </div>
    );
  }
}