import Home from "./pages/home/Home";
import TopBar from "./components/topBar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Signup from "./pages/register/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const user = true
  return (
    <BrowserRouter>
    <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="signup" element={user ? <Home /> : <Signup />} />
        <Route path="login" element={user ? <Home /> : <Login />} />
        <Route path="post/:postId" element={<Single />} />
        <Route path="add" element={user ? <Write /> : <Signup />} />
        <Route path="update" element={user ? <Settings /> : <Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
