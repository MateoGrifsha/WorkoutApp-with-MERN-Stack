import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import LogIn from './pages/logIn'
import SignUp from './pages/signUp'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className = "pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route
              path="/login"
              element={<LogIn />}
            />
            <Route
              path="/signup"
              element={<SignUp />}
            />
          </Routes>
        </div>        
      </BrowserRouter>
    </div>
  );
}


export default App;
