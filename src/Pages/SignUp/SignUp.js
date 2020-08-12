import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import "./SignUp.css"
const SignUp = () => {
  const history = useHistory()
  const [name, setName] = useState("")
  const [password, setPasword] = useState("")
  const [email, setEmail] = useState("")
  const [image,setImage] = useState("")
  const [url,setUrl] = useState(undefined)
  useEffect(()=>{
      if(url){
          uploadFields()
      }
  },[url])
  const uploadPic = ()=>{
      const data = new FormData()
      data.append("file",image)
      data.append("upload_preset", "squadChat")
      data.append("cloud_name", "dzmoypakc")
      fetch("	https://api.cloudinary.com/v1_1/dzmoypakc/image/upload", {
        method: "post",
        body: data,
      })
      .then(res=>res.json())
      .then(data=>{
         setUrl(data.url)
      })
      .catch(err=>{
          console.log(err)
      })
  }
  const uploadFields = ()=>{
      if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
          return;
      }
      fetch("/signup",{
          method:"post",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              name,
              password,
              email,
              pic:url
          })
      }).then(res=>res.json())
      .then(data=>{
         if(data.error){
            setPasword("")
            setName("")
            setEmail("")
            return;
         }
         else{
            history.push('/signin')
         }
      }).catch(err=>{
          console.log(err)
      })
  }
  const PostData = ()=>{
      if(image){
          uploadPic()
      }else{
          uploadFields()
      }
     
  }

  return (
    <div className="page-content">
      <div className="form-v5-content">
        <div className="form-detail">
          <h2>Register Account Form</h2>
          <div className="form-row">
            <label for="full-name">Full Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="full-name" className="input-text" placeholder="Your Name" />
          </div>
          <div className="form-row">
            <label for="your-email">Your Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="your-email" className="input-text" placeholder="Your Email" />
          </div>
          <div className="form-row">
            <label for="password">Password</label>
            <input type="text" value={password} onChange={(e) => setPasword(e.target.value)} id="password" className="input-text" placeholder="Your Password" />
          </div>
          <div className="form-row">
            <label for="password">Uplaod Image</label>
            <input type="file" id="password" className="input-text" placeholder="Upload" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="form-row-last">
            <input type="submit" name="register" className="register" value="Register" onClick={() => PostData()} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
