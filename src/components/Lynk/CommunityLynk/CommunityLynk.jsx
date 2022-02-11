export const CommunityLynk = (props) => {
  const { name, description, user } = props;

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          padding: "1rem",
        }}
      >
        <div>
          <div>{name}</div>
          <div>{description}</div>
        </div>
        <div>{user.name}</div>
      </div>
    </>
  );
};
