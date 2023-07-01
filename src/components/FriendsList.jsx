import propTypes from "prop-types";
import Friend from "./Friend";

const FriendsList = ({ initialFriends }) => {
  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendsList;

FriendsList.propTypes = {
  initialFriends: propTypes.array,
};
