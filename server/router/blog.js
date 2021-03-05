const express = require("express");
const { create_blog, get_all_blog, get_blog_by_id, delete_blog_by_id } = require("../controller/blog");
const { require_user } = require("../user_verify_with_jwt/verify");

const router = express.Router();

router.post("/create",require_user,create_blog)
router.get('/get/all/blog',get_all_blog)
router.get('/get/blog/by/:id',require_user,get_blog_by_id)
router.delete('/delete/blog/by/:id',require_user,delete_blog_by_id)

module.exports = router;