import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/user/userSlice";
import { fetchUserRepo } from "../features/user/userRepoSlice";
import "./search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState();
  const Navigate = useNavigate();

  const findUser = async (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
    Navigate(`/userList/${search}`);
  };

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
    </div>
  );
};

export default Search;
