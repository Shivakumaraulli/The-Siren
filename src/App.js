// import logo from './logo.svg';
import './Components/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Home from './Components/Home'
import Hollywood from './Components/Hollywood';
import Bollywood from "./Components/Bollywood";
import Technology from "./Components/Technology";
import Fitness from "./Components/Fitness";
import Food from "./Components/Food";
import SingleBlogPage from "./Components/SingleBlogPage";
import DetailPage from "./Components/DetailPage";
import './index.css'

function App() {
  return (
    <div className="App">
      {/* <h1>blog-project</h1> */}
      
        <Header />
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/Hollywood" element={<Hollywood />} />
            <Route path="/Technology" element={<Technology />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/food" element={<Food />} />
            <Route path=":category/articleid" element={<SingleBlogPage />} />
            <Route path="*" element={<DetailPage/>} />
          </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;