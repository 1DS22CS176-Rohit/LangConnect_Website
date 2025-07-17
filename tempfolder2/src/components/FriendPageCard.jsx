import { Link } from "react-router-dom";
import { getLanguageFlag } from "./FriendCard";

const FriendPageCard = ({ friend }) => {
  return (
    <div className="card bg-base-200 p-4 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Left: Avatar + Info */}
      <div className="flex items-center gap-4">
        <div className="avatar size-16 rounded-full">
          <img src={friend.profilePic} alt={friend.fullName} />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{friend.fullName}</h3>
          {friend.location && <p className="text-sm opacity-70">{friend.location}</p>}

          <div className="flex flex-wrap gap-1 mt-2 text-sm">
            <span className="badge badge-secondary">
              {getLanguageFlag(friend.nativeLanguage)}
              Native: {friend.nativeLanguage}
            </span>
            <span className="badge badge-outline">
              {getLanguageFlag(friend.learningLanguage)}
              Learning: {friend.learningLanguage}
            </span>
          </div>
        </div>
      </div>

      {/* Right: Bio + Action */}
      <div className="flex flex-col sm:items-end gap-2 flex-1 sm:flex-row sm:justify-end sm:gap-6 sm:flex-wrap">
        {friend.bio && <p className="text-sm opacity-80 max-w-md sm:text-right sm:mb-0">{friend.bio}</p>}
        <Link to={`/chat/${friend._id}`} className="btn btn-primary btn-sm">
          Message
        </Link>
      </div>
    </div>
  );
};

export default FriendPageCard;
