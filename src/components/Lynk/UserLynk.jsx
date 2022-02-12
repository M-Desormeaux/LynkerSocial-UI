import { dateFormat } from "../../utils/utilFuncs";
import { ImageWrapper, ShellImage } from "../Generic.styles";
import { H2, P } from "../Typography/Typography.styles";
import {
  LynkPadded,
  LynkPostContent,
  LynkPostInfo,
  LynkWrapper,
} from "./Lynk.styles";

export const UserLynk = (props) => {
  const { name, creationDate, birthday } = props;

  return (
    <>
      <LynkWrapper>
        <ImageWrapper>
          <ShellImage />
        </ImageWrapper>
        <LynkPostContent>
          <LynkPadded>
            <H2 size="m">{name}</H2>
          </LynkPadded>
          <LynkPadded>
            <LynkPostInfo>
              <P size="s">{dateFormat(creationDate)}</P>
              <P size="s">{dateFormat(birthday)}</P>
            </LynkPostInfo>
          </LynkPadded>
        </LynkPostContent>
      </LynkWrapper>
    </>
  );
};
