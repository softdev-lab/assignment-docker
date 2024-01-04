const express = require('express');
const router = express.Router();// update

const { updateUser, deleteUser, getUser, getUsers, createUsers } = require("../controllers/userControllers")

router.put("/:id", updateUser)
// delete
router.delete("/:id", deleteUser)
// get
router.get("/:id", getUser)
// get all
router.get("/", getUsers)

router.post("/create", createUsers);

module.exports = router;