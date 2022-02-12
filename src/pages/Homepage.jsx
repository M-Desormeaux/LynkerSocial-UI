import { PostLynk } from "../components/Lynk/PostLynk";
import { UserCard } from "../components/UserCard/UserCard";
import { useGet } from "../Hooks/useGet";

export const HomePage = () => {
  const { data, isLoaded } = useGet("/api/Post");
  console.log(data);
  return (
    <>
      <UserCard name="Tom" score={9001} />
      {isLoaded &&
        data.map((data, index) => <PostLynk key={index} {...data} />)}
    </>
  );
};
