import React,{useState,useEffect} from "react";
import {useHistory} from "react-router-dom";
const CreatePost = ()=>{
    const history = useHistory()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")
    useEffect(()=>{
       if(url){
        fetch("/createpost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                body,
                pic:url
            })
        }).then(res=>res.json())
        .then(data=>{
    
           if(data.error){
              console.log(data.message);
           }
           else{
               history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
      }
    },[url])

  const postDetails = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "squadChat")
    data.append("cloud_name", "dzmoypakc")
    fetch("	https://api.cloudinary.com/v1_1/dzmoypakc/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="page-content">
      <div className="form-v5-content">
        <div className="form-detail">
          <h2>Create Post</h2>
          <div className="form-row">
            <label for="your-email">post title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="your-email" className="input-text" placeholder="title" />
          </div>
          <div className="form-row">
            <label for="password">description</label>
            <input type="text" id="password" className="input-text" placeholder="description" value={body} onChange={(e) => setBody(e.target.value)} />
          </div>
          <div className="form-row">
            <label for="password">Uplaod Image</label>
            <input type="file" id="password" className="input-text" placeholder="Upload" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="form-row-last">
            <input type="submit" name="register" className="register" value="create" onClick={() => postDetails()} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
