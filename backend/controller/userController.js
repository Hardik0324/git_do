const axios = require("axios");

const findFriends = async(followers_url, following_url)=>{
    const followers = await axios.get(followers_url);

    const foll_url = following_url.split("{")[0];

    const following = await axios.get(following_url);

    const freinds = followers.map((item, i)=>{
        
    })
}

const getUser = async (req, res) => {
  const { userId } = req.params;

  const userInfo = await axios.get(`https://api.github.com/users/${userId}`);

  const {
    login,
    avatar_url,
    url,
    repos_url,
    name,
    location,
    blog,
    bio,
    public_repos,
    public_gists,
    followers,
    following,
    created_at,
    updated_at,
    followers_url,
    following_url
  } = userInfo;

  const friends = await findFriends(followers_url, following_url);
};

module.exports = { getUser };
