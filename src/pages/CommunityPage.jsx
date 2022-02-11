import { CommunityLynk } from "../components/Lynk/CommunityLynk/CommunityLynk";
import { useGet } from "../Hooks/useGet";

export const CommunityPage = () => {
  const { data, isLoaded } = useGet("/api/Community");
  console.log(data);

  return (
    <>
      {isLoaded &&
        data.map((data, index) => <CommunityLynk key={index} {...data} />)}
    </>
  );
};
