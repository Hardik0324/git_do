// import { useUserContext } from "../utils/UserContext";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Followers.css";
import Navbar from "./Navbar";

const Followers = () => {

  const {username} = useParams();
  const [followers, setFollowers] = useState([]);

  const findFollowers = async()=>{
    const response = await axios.get(
      `https://api.github.com/users/${username}/followers`
    );
    console.log(response.data)
    setFollowers(response.data)
  }

  useEffect(()=>{
    findFollowers();
  },[])

  return (
    <div className="followers-page">
    <Navbar/>
      <div className="followers-content">
        <h2 className="followers-title">Followers of {username}</h2>
        <ul className="followers-list">
          {followers.map((follower) => (
            <li key={follower.id} className="follower-item">
              <div className="follower-info">
                <img
                  src={follower.avatar_url}
                  alt={follower.login}
                  className="follower-avatar"
                />
                <Link
                  to={`/userList/${follower.login}`}
                  className="follower-username"
                >
                  {follower.login}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Followers;
