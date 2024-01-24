import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/user/userSlice";
import { fetchUserRepo } from "../features/user/userRepoSlice";
import "./search.css";
import { useNavigate, useParams } from "react-router-dom";
import Userrepo from "./Userrepo";
import "./RepoList.css"
import Navbar from "./Navbar";

const RepoList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userRepo = useSelector((state) => state.userRepo);
  const Navigate = useNavigate()

  const {login} =  useParams()

  if (userRepo.userRepoInfo.length != 0) {
    localStorage.setItem("repos", JSON.stringify(userRepo.userRepoInfo));
  }

  useEffect(()=>{
    dispatch(fetchUser(login));
  },[])

  const fetchRepo = async () => {
    dispatch(fetchUserRepo(user.userInfo.repos_url));
  };

  const toFollowers = async()=>{
    Navigate(`/followers/${user.userInfo.login}`)
  }

  useEffect(() => {
    if (user.userInfo != "") {
      fetchRepo();
    }
  }, [user]);

  return (
    <div className="maindiv">
    <Navbar/>
      <div className="chilDiv1">
        <img src={user.userInfo.avatar_url}></img>
          {user.userInfo.name ? (
            <span>{user.userInfo.name}</span>
          ) : (
            <span>{user.userInfo.login}</span>
          )}
          <button className="folbtn" onClick={()=>toFollowers()}>Followers</button>
      </div>
      <div className="chilDiv2">
        {userRepo?.userRepoInfo.map((ele) => (
          <Userrepo repo={ele} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
