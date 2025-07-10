import mongoose from "mongoose";
import User from "../models/User.js";

export async function getRecommendedUsers(req, res) {
  try {
    const currentUserId = req.user.id;
    const currentUser = req.user;

    const friendIds =
      currentUser.friends?.map((id) => new mongoose.Types.ObjectId(id)) || [];

    const excludedIds = [
      new mongoose.Types.ObjectId(currentUserId),
      ...friendIds,
    ];

    const recommendedUsers = await User.find({
      _id: { $nin: excludedIds },
      isOnboarded: true,
    });

    res.status(200).json(recommendedUsers);
  } catch (error) {
    console.error("Error in recommendedUsers controller: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getMyFriends(req, res) {
  try {
    const user = await User.findById(req.user.id)
      .select("friends")
      .populate(
        "friends",
        "fullName profilePic nativeLangiuage learningLanguage"
      );

    res.status(200).json(user.friends);
  } catch (error) {
    console.error("Error in recommendedUsers controller: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
