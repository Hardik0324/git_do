const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  login: { type: String, require: true },
  avatar_url: { type: String },
  url: { type: String, require: true },
  repos_url: { type: String, require: true },
  name: { type: String, require: true },
  location: { type: String, require: true },
  blog: { type: String, require: true },
  bio: { type: String, require: true },
  friends: [{ type: String, require: true }],
  public_repos: { type: Number, require: true },
  public_gists: { type: Number, require: true },
  followers: { type: Number, require: true },
  following: { type: Number, require: true },
  created_at: { type: Date, require: true },
  updated_at: { type: Date, require: true },
});