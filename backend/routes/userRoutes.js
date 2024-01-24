const express = require("express");
const {
  getUser,
  deleteUser,
  updateUser,
  sortUser,
  getSearchUser,
} = require("../controller/userController");

const router = express.Router();


router.route("/searchUser").get(getSearchUser);

router.route("/:userId").get(getUser).delete(deleteUser).patch(updateUser);

router.route("/").get(sortUser);


module.exports = router;
