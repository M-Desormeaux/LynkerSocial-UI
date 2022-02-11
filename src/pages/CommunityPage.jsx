import { Lynk } from "../components/Lynk/Lynk";
import { useGet } from "../Hooks/useGet";

export const CommunityPage = () => {
  const { data, isLoaded } = useGet("/api/Community");

  return <>{isLoaded && data.map((post, index) => <></>)}</>;
};
