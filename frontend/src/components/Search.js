import React, { useState,useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import axios from "axios"

const Search = () => {
  const [search, setSearch] = useState();
  const [userData, setUserData] = useState();
  const [repo, setRepo] = useState([])

  const findUser = async(e)=>{
      e.preventDefault()
      const data = await axios.get(`https://api.github.com/users/${search}`);
      console.log(data.data);
      setUserData(data.data)
  }

  const fetchRepo = async()=>{
    const data = await axios.get(userData.repos_url);
    console.log(data.data)
    setRepo(data.data)
  }

 useEffect(() => {
  if(userData){
    fetchRepo();
  }
 }, [userData]);

  return (
    <form
      className="w-[100vw] h-[100vh] flex justify-center items-center bg-gray-100"
      onSubmit={(e)=> findUser(e)}
    >
      <input
        type="text"
        placeholder="Enter a user name ..."
        className="p-[5px] pl-[20px] h-[10%] w-[70%] border-2 border-inherit rounded"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div
        className="p-[5px] h-[10%] w-[8%] border-2 border-inherit rounded flex items-center justify-center bg-[#D8D2DE]"
        onClick={() => findUser()}
      >
        <IoSearch className="h-[100%] w-[40%]" />
      </div>
    </form>
  );
};

export default Search;
