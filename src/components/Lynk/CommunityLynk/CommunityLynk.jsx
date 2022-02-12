import { ImageWrapper, ShellImage } from "../../Generic.styles";
import { H2, P } from "../../Typography/Typography.styles";
import {
  LynkPadded,
  LynkPostContent,
  LynkPostInfo,
  LynkWrapper,
} from "../Lynk.styles";

export const CommunityLynk = (props) => {
  const { user, creationDate, description, body } = props;
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
            <H2 size="m">{user.name}</H2>
            <P>{body}</P>
          </LynkPadded>
          <LynkPadded>
            <LynkPostInfo>
              <P size="s">{description}</P>
              <P size="s">{postDate}</P>
            </LynkPostInfo>
          </LynkPadded>
        </LynkPostContent>
      </LynkWrapper>
    </>
  );
};
