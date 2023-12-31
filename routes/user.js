const express = require("express");
const {
  getUserMe,
  getUserComments,
  getUserLikeEvent,
} = require("../controllers/user");
const { verfiyLoginUser } = require("../middlewares");

const router = express.Router();

// 유저 정보 가져오기
router.get("/me", verfiyLoginUser, getUserMe);

// 유저가 작성한 댓글 가져오기
router.get("/comments", verfiyLoginUser, getUserComments);

// 유저가 좋아요한 이벤트 가져오기
router.get("/liked-events", verfiyLoginUser, getUserLikeEvent);

module.exports = router;
