import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getMyFriends,
  getRecommendedUsers,
  sendFriendRequest,
  getFriendRequests,
  getOutgoingFriendReqs,
  acceptFriendRequest,
} from "../controllers/user.controller.js";

const router = express.Router();

router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);

router.get("/friend-requests", getFriendRequests);
router.get("/outgoing-friend-requests", getOutgoingFriendReqs);
router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);

export default router;
