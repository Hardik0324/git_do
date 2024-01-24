import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/user/userSlice";
import { fetchUserRepo } from "../features/user/userRepoSlice";
import "./search.css";
import { useNavigate } from "react-router-dom";
import Userrepo from "./Userrepo";

const Search = () => {
  const [search, setSearch] = useState();
  const [userData, setUserData] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userRepo = useSelector((state) => state.userRepo);
  const Navigate = useNavigate();

  console.log(user.userInfo);

  const findUser = async (e) => {
    e.preventDefault();
    dispatch(fetchUser(search));
  };

  const fetchRepo = async () => {
    dispatch(fetchUserRepo(user.userInfo.repos_url));
  };

  useEffect(() => {
    if (user.userInfo != "") {
      fetchRepo();
    }
  }, [user]);

  return (
    <div className="pagediv">
      <form className="formdiv" onSubmit={(e) => findUser(e)}>
        <input
          type="text"
          placeholder="Enter a user name ..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <div onClick={(e) => findUser(e)}>
          <IoSearch className="search" />
        </div>
      </form>
      {user.userInfo == "" ? (
        <div className="maindiv"></div>
      ) : (
        <div className="maindiv">
          <div className="chilDiv1">
            <img src={user.userInfo.avatar_url}></img>
            {user.userInfo.name ? <span>{user.userInfo.name}</span> :
            <span>{user.userInfo.login}</span>}
          </div>
          <div className="chilDiv2">
             {
              userRepo?.userRepoInfo.map((ele)=> <Userrepo repo={ele}/>)
             }
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
