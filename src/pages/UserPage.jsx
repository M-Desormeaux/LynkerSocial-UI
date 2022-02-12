import { UserLynk } from "../components/Lynk/UserLynk";
import { useGet } from "../Hooks/useGet";

export const UserPage = () => {
  const { data, isLoaded } = useGet("/api/User");

  return (
    <>
      {isLoaded &&
        data.map((data, index) => <UserLynk key={index} {...data} />)}
    </>
  );
};
