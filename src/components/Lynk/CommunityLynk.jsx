import { dateFormat } from "../../utils/utilFuncs";
import { ImageWrapper, ShellImage } from "../Generic.styles";
import { H2, P } from "../Typography/Typography.styles";
import {
  LynkPadded,
  LynkPostContent,
  LynkPostInfo,
  LynkWrapper,
} from "./Lynk.styles";

export const CommunityLynk = (props) => {
  const { name, creationDate, description, user } = props;

  return (
    <>
      <LynkWrapper>
        <ImageWrapper>
          <ShellImage />
        </ImageWrapper>
        <LynkPostContent>
          <LynkPadded>
            <H2 size="m">{name}</H2>
            <P>{description}</P>
          </LynkPadded>
          <LynkPadded>
            <LynkPostInfo>
              <P size="s">{user.name}</P>
              <P size="s">{dateFormat(creationDate)}</P>
            </LynkPostInfo>
          </LynkPadded>
        </LynkPostContent>
      </LynkWrapper>
    </>
  );
};
