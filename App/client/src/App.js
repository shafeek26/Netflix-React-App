import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login';
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/signup" element = {<SignUp />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/welcome" element = {<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
