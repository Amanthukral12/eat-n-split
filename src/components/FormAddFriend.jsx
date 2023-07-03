import { useState } from "react";
import propTypes from "prop-types";
const FormAddFriend = ({ handleAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image) return;
    const newFriend = {
      name,
      image: `${image}?=${crypto.randomUUID()}`,
      balance: 0,
      id: crypto.randomUUID(),
    };
    handleAddFriend(newFriend);
    console.log(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button className="button">Add</button>
    </form>
  );
};

export default FormAddFriend;

FormAddFriend.propTypes = {
  handleAddFriend: propTypes.func,
};
