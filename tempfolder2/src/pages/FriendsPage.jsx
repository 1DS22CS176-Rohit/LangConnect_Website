import { useQuery } from "@tanstack/react-query";
import FriendPageCard from "../components/FriendPageCard";
import { getUserFriends } from "../lib/api";
import NoFriendsFound from "../components/NoFriendsFound";

const FriendsPage = () => {
  const { data: friends = [], isLoading } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
    retry: false,
  });

  return (
    <div className="container mx-auto px-4 py-6 space-y-6 p-8">
      <h1 className="text-3xl font-bold">Friends</h1>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <span className="loading loading-spinner loading-lg" />
        </div>
      ) : friends.length === 0 ? (
        <NoFriendsFound />
      ) : (
        <div className="space-y-4">
          {friends.map((friend) => (
            <FriendPageCard key={friend._id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsPage;
