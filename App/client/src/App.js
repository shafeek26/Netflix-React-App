import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login';
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/signup" element = {<SignUp />} />
        <Route path="/login" element = {<Login />} />
      </Routes>
    </div>
  );
}

export default App;
