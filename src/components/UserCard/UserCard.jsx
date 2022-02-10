import { useState } from "react";
import { ImageWrapper, ShellImage } from "../Generic.styles";
import { H2, H3 } from "../Typography/Typography.styles";
import { UserCardWrapper } from "./UserCard.styles";
import { UserCardInput } from "./UserCardInput";

export const UserCard = (props) => {
  const [isPosting, setIsPosting] = useState(false);
  const { name, score } = props;

  const toggleHandler = () => {
    setIsPosting((isPosting) => !isPosting);
  };

  return (
    <>
      <UserCardWrapper>
        <ImageWrapper>
          <ShellImage />
        </ImageWrapper>
        {isPosting ? (
          <>
            <UserCardInput />
            <div>
              <button onClick={toggleHandler}>Post</button>
              <button onClick={toggleHandler}>Discard</button>
            </div>
          </>
        ) : (
          <>
            <div>
              <H2 size="l" bold>
                User: {name}
              </H2>
              <H3>Score: {score}</H3>
            </div>
            <button onClick={toggleHandler}>Post</button>
          </>
        )}
      </UserCardWrapper>
    </>
  );
};
