import React, { useState, useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import { UserContext } from "../../App"
import "./Signin.css"
import M from "materialize-css"
const SignIn = () => {
  const { state, dispatch } = useContext(UserContext)
  const history = useHistory()
  const [password, setPasword] = useState("")
  const [email, setEmail] = useState("")
  const PostData = () => {
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      setEmail("")
      setPasword("")
      return
    }
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.error) {
          setEmail("")
          setPasword("")
          return
        } else {
          localStorage.setItem("jwt", data.token)
          localStorage.setItem("user", JSON.stringify(data.user))
          dispatch({ type: "USER", payload: data.user })
          history.push("/")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="page-content">
      <div className="form-v5-content">
        <div className="form-detail">
          <h2>Register Account Form</h2>
          <div className="form-row">
            <label for="your-email">Your Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="your-email" className="input-text" placeholder="Your Email" />
          </div>
          <div className="form-row">
            <label for="password">Password</label>
            <input type="password" id="password" className="input-text" placeholder="Your Password" value={password} onChange={(e) => setPasword(e.target.value)} />
          </div>
          <div className="form-row-last">
            <input type="submit" name="register" className="register" value="Login" onClick={() => PostData()} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
