import React from 'react'

const Userrepo = ({repo}) => {
  return (
    <div className='repo'>
        <img src={repo.owner.avatar_url} alt='avatar' className='repoavatar'></img>
        <div className='repodesc'>
            <div className='repoName'>{repo.name}</div>
            <div>{repo.description}</div>
        </div>
    </div>
  )
}

export default Userrepo