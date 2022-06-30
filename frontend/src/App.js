import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';

function App() {
  // fetch('http://localhost:5000/posts')
  // .then((response) => console.log(response))
  // axios.get('http://localhost:5000/posts')
  // .then((res) => console.log(res.data))
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addproduct' element={<AddProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
