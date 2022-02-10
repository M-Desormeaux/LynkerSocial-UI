import styled from "styled-components";
import { FlexWrapper } from "../Generic.styles";

export const LynkWrapper = styled(FlexWrapper)`
  border-top: 1px solid black;
`;

export const LynkPostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const LynkPadded = styled.div`
  padding: 8px;
`;

export const LynkPostInfo = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid black;
`;
