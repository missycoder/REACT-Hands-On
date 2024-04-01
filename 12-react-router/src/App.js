import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import About from './pages/About';
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import SubmittedForm from "./pages/SubmittedForm";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li>
            <Link to="/posts"> Posts </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/form-submitted" element={<SubmittedForm />} />
        <Route path="/posts" element={<PostPage />} />
      </Routes>
    </Router>
  )
}

export default App;
