const express = require("express");
const { getUser, deleteUser, updateUser, sortUser, getSearchUser } = require("../controller/userController");


const router = express.Router();

router.route("/:userId").get(getUser).delete(deleteUser).patch(updateUser)

router.route("/").get(sortUser)

router.route("/search").get(getSearchUser)

module.exports = router;