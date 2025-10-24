import {Routes, Route } from "react-router-dom";
import PostList from "./pages/PostList";
import LostList from "./pages/LostList";
import NoticeList from "./pages/NoticeList";
import CheckLost from "./pages/CheckLost";
import CheckNotice from "./pages/CheckNotice";

function App() {
  return (
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/lost-list" element={<LostList />} />
        <Route path="/notice-list" element={<NoticeList />} />
        <Route path="/check-lost" element={<CheckLost />} />
        <Route path="/check-notice" element={<CheckNotice />} />
      </Routes>
  );
}

export default App;
