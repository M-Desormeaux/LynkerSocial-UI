import { useEffect, useState } from "react";
import { Lynk } from "../components/Lynk/Lynk";
import { UserCard } from "../components/UserCard/UserCard";
import { useGet } from "../Hooks/useGet";

export const HomePage = () => {
  const { data, isLoaded } = useGet("/api/Post");
  console.log(data);

  return (
    <>
      <UserCard name="Tom" score={9001} />
      {isLoaded && data.map((post, index) => <Lynk key={index} {...post} />)}
    </>
  );
};
