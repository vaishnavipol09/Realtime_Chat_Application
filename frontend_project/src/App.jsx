import React from "react"
import LoginPage from "./pages/LoginPage";
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
