export const UserLynk = (props) => {
  const { name, birthday } = props;
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          padding: "1rem",
        }}
      >
        <div>{name}</div>
        <div>{birthday}</div>
      </div>
    </>
  );
};
