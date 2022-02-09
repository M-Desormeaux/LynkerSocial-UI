import styled from "styled-components";

// size?
// bold?
// italics
// no margin

const fontSize = (size) => {
  switch (size) {
    case "s":
      return 14;
    case "m":
      return 18;
    case "l":
      return 24;
    case "xl":
      return 36;
    default:
      return 18;
  }
};

export const H1 = styled.h1`
  font-size: ${({ size }) => fontSize(size)}px;
  font-weight: ${({ isBold }) => (isBold ? "bold" : "normal")};
  font-style: ${({ isItalic }) => (isItalic ? "italic" : "normal")};
  margin: 0;
`;

export const H2 = styled.h2`
  font-size: ${({ size }) => fontSize(size)}px;
  font-weight: ${({ isBold }) => (isBold ? "bold" : "normal")};
  font-style: ${({ isItalic }) => (isItalic ? "italic" : "normal")};
  margin: 0;
`;

export const H3 = styled.h3`
  font-size: ${({ size }) => fontSize(size)}px;
  font-weight: ${({ isBold }) => (isBold ? "bold" : "normal")};
  font-style: ${({ isItalic }) => (isItalic ? "italic" : "normal")};
  margin: 0;
`;

export const H4 = styled.h4`
  font-size: ${({ size }) => fontSize(size)}px;
  font-weight: ${({ isBold }) => (isBold ? "bold" : "normal")};
  font-style: ${({ isItalic }) => (isItalic ? "italic" : "normal")};
  margin: 0;
`;

export const H5 = styled.h5`
  font-size: ${({ size }) => fontSize(size)}px;
  font-weight: ${({ isBold }) => (isBold ? "bold" : "normal")};
  font-style: ${({ isItalic }) => (isItalic ? "italic" : "normal")};
  margin: 0;
`;

export const H6 = styled.h6`
  font-size: ${({ size }) => fontSize(size)}px;
  font-weight: ${({ isBold }) => (isBold ? "bold" : "normal")};
  font-style: ${({ isItalic }) => (isItalic ? "italic" : "normal")};
  margin: 0;
`;

export const P = styled.p`
  font-size: ${({ size }) => fontSize(size)}px;
  font-weight: ${({ isBold }) => (isBold ? "bold" : "normal")};
  font-style: ${({ isItalic }) => (isItalic ? "italic" : "normal")};
  margin: 0;
`;
