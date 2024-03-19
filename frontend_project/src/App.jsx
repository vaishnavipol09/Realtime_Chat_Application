import React from "react"
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
const App = () => {

  const user = false;
  return (
    <>
      <div>
        {!user ? <LoginPage/> : <HomePage/>}
      </div>
    </>
  )
}

export default App
