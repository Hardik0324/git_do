const express = require("express");
const { getUser, deleteUser, updateUser, sortUser } = require("../controller/userController");


const router = express.Router();

router.route("/:userId").get(getUser).delete(deleteUser).patch(updateUser)

router.route("/").get(sortUser)

module.exports = router;