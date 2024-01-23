import './App.css';
import Search from './components/Search';
import Repodetail from './components/Repodetail';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Search/>} />
        <Route path="/repos" element={<Repodetail/>} />
      </Routes>
    </div>
  );
}

export default App;
