import React, { useContext, useRef, useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { UserContext } from "../../App"
import "./sideBar.style.css"

const SideBar = () => {
  const { state, dispatch } = useContext(UserContext)
  const history = useHistory()
  const renderList = () => {
    return (
      <li
        onClick={() => {
          localStorage.clear()
          dispatch({ type: "CLEAR" })
          history.push("/signup")
        }}
      >
        <a>logout</a>
      </li>
    )
  }
  return (
    <div className="headers">
      <header className="header" role="banner">
        <h1 className="logo">
          <a href="#">
            Squad <span>Chat</span>
          </a>
        </h1>
        <div className="nav-wrap">
          <nav className="main-nav" role="navigation">
            <ul className="unstyled list-hover-slide">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/profile">Profil</a>
              </li>
              <li>
                <a href="#">Notification</a>
              </li>
              <li>
                <a href="#">messages</a>
              </li>
              <li>
                <a href="/create">add post</a>
              </li>
              <li>
                <a href="/following">Following posts</a>
              </li>
              
              {renderList()}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default SideBar
