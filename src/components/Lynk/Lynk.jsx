// Picture w/ Default
// Title
// Text
// Username
// Community
// Post Date

import { H2, P } from "../Typography/Typography.styles";

export const Lynk = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "8px",
          }}
        >
          <div
            style={{
              border: "1px solid black",
              height: "96px",
              width: "96px",
              borderRadius: "100%",
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ padding: "8px" }}>
            <H2 size="l">Temp Title</H2>
            <P>Temp Content</P>
          </div>
          <div style={{ padding: "8px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                borderBottom: "1px solid black",
              }}
            >
              <P size="s">Username</P>
              <P size="s">Community</P>
              <P size="s">Post Date</P>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
