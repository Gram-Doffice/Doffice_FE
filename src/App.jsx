import {Routes, Route } from "react-router-dom";
import PostList from "./pages/PostList";
import Login from "./pages/Login";
import Write_Notice from "./pages/Write_Notice";
import Write_Lost from "./pages/Write_Lost";
import Modify_Notice from "./pages/Modify_Notice"
import Modify_Lost from "./pages/Modify_Lost"
import LostList from "./pages/LostList";
import NoticeList from "./pages/NoticeList";
import CheckLost from "./pages/CheckLost";
import CheckNotice from "./pages/CheckNotice";

function App() {
  return (
    <Routes>
      <Route path="/lost-list" element={<LostList />} />
      <Route path="/notice-list" element={<NoticeList />} />
      <Route path="/check-lost" element={<CheckLost />} />
      <Route path="/check-notice" element={<CheckNotice />} />
      <Route path="/" element={<PostList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/write-notice" element={<Write_Notice />} />
      <Route path="/write-lost" element={<Write_Lost />} />
      <Route path="/modify-notice" element={<Modify_Notice />} />
      <Route path="/modify-lost" element={<Modify_Lost />} />
    </Routes>
  );
}

export default App;
