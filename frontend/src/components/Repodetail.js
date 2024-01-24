import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./Repodetail.css"

const Repodetail = () => {
  const repos = JSON.parse(localStorage.getItem("repos"))
  const [repo, setRepo] = useState();
  const [languages, setLanguages] = useState(null);
  const {id} = useParams()

  console.log(repo)

  useEffect(()=>{
    repos.forEach((ele) => {if(ele.id==id){
        setRepo(ele);
    }})
  },[])

  const fetchLanguage = async()=>{
    if(repo){
        const languagesResponse = await axios.get(repo.languages_url);
        setLanguages(languagesResponse.data);
    }
  }

  useEffect(()=>{
    fetchLanguage()
  },[repo])

  return (
    <div className="detaildiv">
      {/* <Navbar /> */}
      <div className="detailchild">
        <h2>Repository Details</h2>
        {repo && (
          <div className="repodet">
            <p>
              <span>Name: </span>
              {repo.name}
            </p>
            <p>
              <span>Description: </span>
              {repo.description}
            </p>
            <p>
              <span>Primary Langauges: </span>
              {repo.language}
            </p>
            <p>
              <span>Forks Count: </span>
              {repo.forks_count}
            </p>

            {/* Display languages */}
            {languages && (
              <div>
                <h3 className="languages">Languages:</h3>
                <ul>
                  {Object.keys(languages).map((lang) => (
                    <li className="lanlist" key={lang}>
                      {lang}: {languages[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Repodetail