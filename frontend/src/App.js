import './App.css';
import RepoList from './components/RepoList';
import Repodetail from "./components/Repodetail"
import Search from './components/Search';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route exact path="/userList/:login" element={<RepoList />} />
        <Route exact path="/repodetail/:id" element={<Repodetail />} />
        <Route path="/followers/:username" element={<FollowersPage />} />
      </Routes>
    </div>
  );
}

export default App;
