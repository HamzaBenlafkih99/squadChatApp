import React, { useEffect, createContext, useReducer, useContext } from "react"
import { reducer, initialState } from "./reducers/userReducer"
// import './App.css';
import { BrowserRouter, Switch, Route, useHistory, Redirect } from "react-router-dom"

import "./App.css"

import UserProfil from './Pages/userProfil/userProfil';
import HomePgae from "./Pages/HomePage/HomePage"
import RightProfil from './Pages/ProfilPage/ProfilPage';
import SignUp from "./Pages/SignUp/SignUp"
import SignIn from "./Pages/SignInpage/SignIn"
import CreatePost from "./Pages/createPost/createPost"
import FollowingPage from "./Pages/followingPage/followingPage";
export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({ type: "USER", payload: user })
    } else {
      history.push("/signup")
    }
  }, [])

  return (
    <Switch>
      <Route exact path="/" component={HomePgae} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/create" component={CreatePost} />
      <Route exact path="/profile" component={RightProfil} />
      <Route path="/profile/:userid" component={UserProfil} />
      <Route path="/following" component={FollowingPage} />
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
