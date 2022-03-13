import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ErrorNF from "./pages/ErrorNF/ErrorNF";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Comments from "./pages/Comments/Comments";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/posts/:postId/comments" element={<Comments />} />
            <Route path="*" element={<ErrorNF />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
