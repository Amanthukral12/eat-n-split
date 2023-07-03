import propTypes from "prop-types";
import Friend from "./Friend";

const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendsList;

FriendsList.propTypes = {
  friends: propTypes.array,
};
