import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from "../../App";

import "./RightProfil.css";
import ProfilImage from "./image/3d760775b26de04db0e81b41aaf63805.jpg";
import CoverImage from "./image/photo-1535443274868-756b0f070b6e.jpg";
import SuggestionsButton from "../SuggestionsButton/SuggestionsButton";

const RightProfil =()=> {
  const [mypics,setPics] = useState([])
  const {state,dispatch} = useContext(UserContext)
  const [image,setImage] = useState("")
  useEffect(()=>{
     fetch('/mypost',{
         headers:{
             "Authorization":"Bearer "+localStorage.getItem("jwt")
         }
     }).then(res=>res.json())
     .then(result=>{
         console.log(result)
         setPics(result.mypost)
     })
  },[])
  
  return (
      <div className="Main">
        <div className="CoverImage">
          <img src={CoverImage} alt="CoverImage" />
        </div>
        <div className="DisplayCenter">
          {" "}
          <div className="ProfilImage">
            <img src={state?state.pic:"loading"} alt="ProfilImage" />
          </div>
          <div className="ProfilName">
            <h3>{state?state.name:"loading"} </h3>
          </div>
        </div>

        <div className="Button">
          <div className="Button-div">
              <h6>{mypics.length} posts</h6>
              <h6>{state?state.followers.length:"0"} followers</h6>
              <h6>{state?state.following.length:"0"} following</h6>
          </div>
        </div>

        <div className="Suggestions">
          <div className="Suggestions-div">
            <SuggestionsButton suggestionName={"Travel"} />
          </div>
          <div className="Suggestions-div">
            <SuggestionsButton suggestionName={"Fashion"} />
          </div>
          <div className="Suggestions-div">
            <SuggestionsButton suggestionName={"LifeStyle"} />
          </div>
          <div className="Suggestions-div">
            <SuggestionsButton suggestionName={"News"} />
          </div>
        </div>
        <div className="ImageProfil">
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
              {
                mypics.map(item=>{
                  return( 
                   <div className="PictureProfil col-md-4 col-sm-6">
                      <img key={item._id} src={item.photo} alt={item.title} />
                   </div>
                  )
                })
              }
               
           </div>
          </div>
        </div>
      </div>
    );

}

export default RightProfil;