import './App.css';
import Search from './components/Search';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Search />} />
        </Routes>
    </div>
  );
}

export default App;
