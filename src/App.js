import Home from "./Pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import BlogDetail from "./Pages/BlogDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Component/Navigation";
import { Container } from "react-bootstrap";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
