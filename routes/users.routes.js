const express = require("express");
const UsersControllers = require("../controllers/Users");
var router = express.Router();
router.get("/", UsersControllers.Get.bind(UsersControllers));
router.post("/", UsersControllers.Post.bind(UsersControllers));
router.get("/:id", UsersControllers.GetById.bind(UsersControllers));
router.put("/:id", UsersControllers.Put.bind(UsersControllers));
router.delete("/:id", UsersControllers.Delete.bind(UsersControllers));
module.exports = router;
