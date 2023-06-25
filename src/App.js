import ForgetPassword from "./components/ForgetPassword";
import Login from "./components/login";
import Signup from "./components/signup"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return(
    <div className="app">
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <ForgetPassword /> */}
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<ForgetPassword />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;