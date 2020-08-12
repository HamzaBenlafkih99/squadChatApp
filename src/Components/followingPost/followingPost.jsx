import React, { useState, useEffect, useContext } from "react"
import { UserContext } from "../../App"
import "./followingPost.css";
import SearchBox from "../searchBox/searchBox"
import {Link} from 'react-router-dom'

function FollowingPost() {
  const { state, dispatch } = useContext(UserContext)
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("/getsubpost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setData(result.posts)
      })
  }, [])

  const likePost = (id) => {
    fetch("/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        //   console.log(result)
        const newData = data.map((item) => {
          if (item._id == result._id) {
            return result
          } else {
            return item
          }
        })
        setData(newData)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const makeComment = (text,postId)=>{
    fetch('/comment',{
        method:"put",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
            postId,
            text
        })
    }).then(res=>res.json())
    .then(result=>{
        console.log(result)
        const newData = data.map(item=>{
          if(item._id==result._id){
              return result
          }else{
              return item
          }
       })
      setData(newData)
    }).catch(err=>{
        console.log(err)
    })
  }


  return (
    <div className="containe">
      <div className="centerPage">
        <SearchBox />
        {data.map((item) => {
          return (
            <div className="space cardbox shadow-lg bg-white">
              <div className="cardbox-heading">
                <div className="media m-0">
                  <div className="d-flex mr-3">
                    <a href="">
                      <img className="img-fluid rounded-circle" src={item.postedBy.pic} />
                    </a>
                  </div>
                  <div className="media-body">
                    <p className="m-0"><Link to={item.postedBy._id !== state._id?"/profile/"+item.postedBy._id :"/profile"  }>{item.postedBy.name}</Link></p>
                  </div>
                </div>
              </div>

              <div className="cardbox-item">
                <img className="img-fluid" src={item.photo} alt="Image" />
              </div>

              <div className="cardbox-base">
                <ul className="float-right">
                  <li>
                    <a>
                      <i className="fa fa-comments"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <em className="mr-5">12</em>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-share-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <em className="mr-3">03</em>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    {item.likes.includes(state._id) ? (
                      <a>
                        <i className="fa fa-thumbs-up"></i>
                      </a>
                    ) : (
                      <a>
                        <i className="fa fa-thumbs-up" onClick={() => likePost(item._id)}></i>
                      </a>
                    )}
                  </li>
                  <li>
                    <a href="#">
                      <img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/3.jpeg" className="img-fluid rounded-circle" alt="User" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/1.jpg" className="img-fluid rounded-circle" alt="User" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/5.jpg" className="img-fluid rounded-circle" alt="User" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/2.jpg" className="img-fluid rounded-circle" alt="User" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <span>{item.likes.length} Likes</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="cardbox-comments">
                {
                   item.comments.map(record=>{
                      return(
                        <div className="comentaire">
                          <img src={record.postedBy.pic} className="size img-fluid rounded-circle" alt="User" />
                          <h6 className="c-h6" key={record._id}>{record.text}</h6>
                        </div>
                      )
                   })
                }
                <span className="comment-avatar float-left">
                  <a href="">
                    <img className="rounded-circle" src={state?state.pic:"loading"} alt="..." />
                  </a>
                </span>
                <div className="search">
                  <form onSubmit={(e)=>{
                      e.preventDefault()
                      makeComment(e.target[0].value,item._id)
                  }}>
                     <input placeholder="Write a comment" type="text" />
                  </form>
                  <button>
                    <i className="fa fa-camera"></i>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default FollowingPost;
