import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddPost from './Pages/AddPost/AddPost';
import Home from './Pages/Home/Home';
import PrimarySearchAppBar from './Components/header';

function App() {
  // fetch('http://localhost:5000/posts')
  // .then((response) => console.log(response))
  // axios.get('http://localhost:5000/posts')
  // .then((res) => console.log(res.data))
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addpost' element={<AddPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
