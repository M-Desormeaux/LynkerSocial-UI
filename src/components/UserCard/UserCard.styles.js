import styled from "styled-components";
import { FlexWrapper } from "../Generic.styles";

export const UserCardWrapper = styled(FlexWrapper)`
  padding: 8px;
  justify-content: space-between;
  background: gray;
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const PostWrapper = styled(FlexWrapper)`
  flex-direction: column;
  width: 100%;
`;
