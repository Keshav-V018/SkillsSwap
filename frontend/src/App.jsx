import "./App.css";
import {Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Browse from "./Pages/Browse";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
