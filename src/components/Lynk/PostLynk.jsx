import { ImageWrapper, ShellImage } from "../Generic.styles";
import { H2, P } from "../Typography/Typography.styles";
import {
  LynkPadded,
  LynkPostContent,
  LynkPostInfo,
  LynkWrapper,
} from "./Lynk.styles";

export const PostLynk = (props) => {
  const { user, community, title, body, creationDate } = props;
  const date = creationDate ? new Date(creationDate) : new Date();
  const postDate = `${
    date.getMonth() + 1
  } | ${date.getDate()} | ${date.getFullYear()}`;

  return (
    <>
      <LynkWrapper>
        <ImageWrapper>
          <ShellImage />
        </ImageWrapper>
        <LynkPostContent>
          <LynkPadded>
            <H2 size="l">{title}</H2>
            <P>{body}</P>
          </LynkPadded>
          <LynkPadded>
            <LynkPostInfo>
              <P size="s">{user.name}</P>
              <P size="s">{community.name}</P>
              <P size="s">{postDate}</P>
            </LynkPostInfo>
          </LynkPadded>
        </LynkPostContent>
      </LynkWrapper>
    </>
  );
};
