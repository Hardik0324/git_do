const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  login: { type: String, require: true },
  id: Number,
  node_id: String,
  avatar_url: { type: String },
  gravatar_id: String,
  url: { type: String, require: true },
  html_url: String,
  followers_url: String,
  following_url: String,
  gists_url: String,
  starred_url: String,
  subscriptions_url: String,
  organizations_url: String,
  repos_url: { type: String, require: true },
  events_url: String,
  received_events_url: String,
  type: String,
  site_admin: Boolean,
  name: { type: String, require: true },
  company: String,
  location: { type: String, require: true },
  email: String,
  blog: { type: String, require: true },
  hireable: Boolean,
  bio: { type: String, require: true },
  twitter_username: String,
  friends: [{ type: String, require: true }],
  public_repos: { type: Number, require: true },
  public_gists: { type: Number, require: true },
  followers: { type: Number, require: true },
  following: { type: Number, require: true },
  created_at: { type: Date, require: true },
  updated_at: { type: Date, require: true },
  isDeleted : {type: Boolean, default: false, select: false}
});

const User = mongoose.model("User", userSchema)

module.exports = User;

