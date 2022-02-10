import { useState } from "react";
import { PostWrapper } from "./UserCard.styles";

export const UserCardInput = () => {
  const [titleState, setTitleState] = useState("");
  const [contentState, setContentState] = useState("");

  const titleUpdateHandler = (event) => {
    event.preventDefault();
    const input = event.target.value;
    setTitleState(input);
  };

  const contentUpdateHandler = (event) => {
    event.preventDefault();
    const input = event.target.value;
    setContentState(input);
  };

  return (
    <PostWrapper>
      <input
        type="text"
        id="title"
        placeholder="Title"
        value={titleState}
        onChange={titleUpdateHandler}
      />
      <input
        type="text"
        id="content"
        placeholder="Content"
        value={contentState}
        onChange={contentUpdateHandler}
      />
    </PostWrapper>
  );
};
