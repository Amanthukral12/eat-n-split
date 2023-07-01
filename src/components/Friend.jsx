import propTypes from "prop-types";

const Friend = ({ friend }) => {
  return (
    <li>
      <img src={friend.image} alt="Friend Image" />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ₹{Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you ₹{friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
    </li>
  );
};

export default Friend;

Friend.propTypes = {
  friend: propTypes.object,
};
