import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import "./App.css";
import BlogPost from "./pages/blogPost/BlogPost";
import LandingPage from "./pages/landingPage/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/blogPost" element={<BlogPost />} />
      </Switch>
    </Router>
  );
}

export default App;
