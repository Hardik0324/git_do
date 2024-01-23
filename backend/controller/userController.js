const axios = require("axios");
const User = require("../model/userModel");
const asyncHandler = require("express-async-handler");

const findFriends = async (followers_url, following_url) => {
  //   console.log(followers_url, following_url);
  const followers = await axios.get(followers_url);

  const foll_url = following_url.split("{")[0];

  const following = await axios.get(foll_url);

  //   console.log(followers.data)

  const freinds = [];

  followers.data.forEach((ele1)=>{
    following.data.forEach((ele2)=> ele1.login == ele2.login && freinds.push(ele1.login))
  })

  return freinds;
};

const getUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const exsist = await User.findOne({login: userId})

  if (exsist) {
    res.status(400);
    throw new Error("User already exsist");
  }

  const userInfo = await axios.get(`https://api.github.com/users/${userId}`);
  //   console.log(userInfo)

  const {followers_url, following_url} = userInfo.data;

  const friends = await findFriends(followers_url, following_url);
  console.log(friends);

  const user = await User.create({...userInfo.data, friends});
  if (user) {
    res.status(201).json(user);
  } else {
    res.status(400);
    throw new Error("Failed to register User.");
  }
});

const deleteUser = asyncHandler(async(req, res)=>{
    const { userId } = req.params;
    const user =  await User.findOneAndUpdate({login: userId}, {isDeleted: true}, {new: true});

    if (user) {
      res.status(201).json(user);
    } else {
      res.status(400);
      throw new Error("Failed to delete User.");
    }
})

const updateUser = asyncHandler(async(req, res)=>{
    const { userId } = req.params;
    const user = await User.findOneAndUpdate({ login: userId, isDeleted: false }, req.body, { new: true });

    if (user) {
      res.status(201).json(user);
    } else {
      res.status(400);
      throw new Error("Failed to update User.");
    }
})

const sortUser = asyncHandler(async(req, res)=>{

    let sortBy
    if(req.query.sort){
        sortBy = req.query.sort.split(',').join(" ");
    }

    const users = await User.find({isDeleted:false}).sort(sortBy);

    if (users) {
      res.status(201).json(users);
    } else {
      res.status(400);
      throw new Error("Failed to return users.");
    }
}
)

module.exports = { getUser, deleteUser, updateUser, sortUser};
