import { useEffect, useState } from "react";
import { Lynk } from "../components/Lynk/Lynk";
import { UserCard } from "../components/UserCard/UserCard";

export const HomePage = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("/api/Post")
      .then((res) => res.json())
      .then((result) => {
        setAllPosts(result);
        setIsLoaded(true);
      });
  }, []);

  return (
    <>
      <UserCard name="Tom" score={9001} />
      {isLoaded &&
        allPosts.map((post, index) => <Lynk key={index} {...post} />)}
    </>
  );
};
