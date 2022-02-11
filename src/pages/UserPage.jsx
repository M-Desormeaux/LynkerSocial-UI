import { Lynk } from "../components/Lynk/Lynk";
import { useGet } from "../Hooks/useGet";

export const UserPage = () => {
  const { data, isLoaded } = useGet("/api/User");

  return <>{isLoaded && data.map((post, index) => <></>)}</>;
};
