import { ImageWrapper, ShellImage } from "../../Generic.styles";
import { H2, P } from "../../Typography/Typography.styles";
import {
  LynkPadded,
  LynkPostContent,
  LynkPostInfo,
  LynkWrapper,
} from "../Lynk.styles";

export const UserLynk = (props) => {
  const { name, creationDate, birthday } = props;
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
            <H2 size="m">{name}</H2>
          </LynkPadded>
          <LynkPadded>
            <LynkPostInfo>
              <P size="s">{postDate}</P>
              <P size="s">{birthday}</P>
            </LynkPostInfo>
          </LynkPadded>
        </LynkPostContent>
      </LynkWrapper>
    </>
  );
};

//I left all of the below code here just in case I did something wrong.

// export const UserLynk = (props) => {
//   const { name, birthday } = props;
//   return (
//     <>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           padding: "1rem",
//         }}
//       >
//         <div>{name}</div>
//         <div>{birthday}</div>
//       </div>
//     </>
//   );
// };
