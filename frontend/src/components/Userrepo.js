import React from "react";
import { useNavigate } from "react-router-dom";

const Userrepo = ({ repo }) => {
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate(`/repodetail/${repo.id}`);
  };

  return (
    <div className="repo" onClick={() => handleClick()}>
      <img
        src={repo.owner.avatar_url}
        alt="avatar"
        className="repoavatar"
      ></img>
      <div className="repodesc">
        <div className="repoName">{repo.name}</div>
        <div>{repo.description}</div>
      </div>
    </div>
  );
};

export default Userrepo;
