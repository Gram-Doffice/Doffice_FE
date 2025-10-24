import { Route, Routes } from "react-router-dom";
import PostList from "./pages/PostList";
import Login from "./pages/Login";
import Write_Notice from "./pages/Write_Notice";
import Write_Lost from "./pages/Write_Lost";
import Modify_Notice from "./pages/Modify_Notice"
import Modify_Lost from "./pages/Modify_Lost"

function App() {
  return (
    <Routes>
      <Route path="/PostList" element={<PostList />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Write_Notice" element={<Write_Notice />} />
      <Route path="/Write_Lost" element={<Write_Lost />} />
      <Route path="/Modify_Notice" element={<Modify_Notice />} />
      <Route path="/" element={<Modify_Lost />} />
    </Routes>
  );
}

export default App;
