import { Route, Routes } from "react-router-dom";
import PostList from "./pages/PostList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
    </Routes>
  );
}

export default App;
