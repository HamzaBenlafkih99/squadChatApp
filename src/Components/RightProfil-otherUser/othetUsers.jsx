import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from "../../App";
import {useParams} from 'react-router-dom'
import "./otherUsers.css";
import CoverImages from "./image/photo-1535443274868-756b0f070b6e.jpg";
import SuggestionsButton from "../SuggestionsButton/SuggestionsButton"; 

const OtherUser =()=> {
    const [userProfile,setProfile] = useState(null)
    
    const {state,dispatch} = useContext(UserContext)
    const {userid} = useParams();
    const [showfollow,setShowFollow] = useState(true);
    useEffect(()=>{
       fetch(`/user/${userid}`,{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           console.log(result)
           setProfile(result)
       })
    },[])

    const followUser = ()=>{
      fetch('/follow',{
          method:"put",
          headers:{
              "Content-Type":"application/json",
              "Authorization":"Bearer "+localStorage.getItem('jwt')
          },
          body:JSON.stringify({
              followId:userid
          })
      }).then(res=>res.json())
      .then(data=>{
      
          dispatch({type:"UPDATE",payload:{following:data.following,followers:data.followers}})
           localStorage.setItem("user",JSON.stringify(data))
           setProfile((prevState)=>{
               return {
                   ...prevState,
                   user:{
                       ...prevState.user,
                       followers:[...prevState.user.followers,data._id]
                      }
               }
           })
           setShowFollow(false)
      })
  }
  const unfollowUser = ()=>{
      fetch('/unfollow',{
          method:"put",
          headers:{
              "Content-Type":"application/json",
              "Authorization":"Bearer "+localStorage.getItem('jwt')
          },
          body:JSON.stringify({
              unfollowId:userid
          })
      }).then(res=>res.json())
      .then(data=>{
          
          dispatch({type:"UPDATE",payload:{following:data.following,followers:data.followers}})
           localStorage.setItem("user",JSON.stringify(data))
          
           setProfile((prevState)=>{
              const newFollower = prevState.user.followers.filter(item=>item != data._id )
               return {
                   ...prevState,
                   user:{
                       ...prevState.user,
                       followers:newFollower
                      }
               }
           })
           setShowFollow(true)
           
      })
  }
  
  return (
    <>
    {userProfile ?
      <div className="Main">
        <div className="CoverImage">
          <img src={CoverImages} alt="CoverImage" />
        </div>
        <div className="DisplayCenter">
          {" "}
          <div className="ProfilImage">
            <img src={userProfile.user.pic} alt="ProfilImage" />
          </div>
          <div className="ProfilName">
            <h3>{userProfile.user.name} </h3>
          </div>
        </div>

        <div className="Button">
          <div className="Button-div">
              <h6>{userProfile.posts.length} posts</h6>
              <h6>{userProfile.user.followers.length} followers</h6>
              <h6>{userProfile.user.following.length} following</h6>
          </div>
          {showfollow?
             <div>
               <button className="buttonProfil"  onClick={()=>followUser()}>Follow</button>
             </div>
             :
             <div>
               <button className="buttonProfil"  onClick={()=>unfollowUser()}>Unfollow</button>
             </div>
          }
                
                   
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
                
                    userProfile.posts.map(item=>{
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
      : <h2 className='h1'>loading...!</h2>}
   </>
    );

}

export default OtherUser;