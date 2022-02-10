import { Lynk } from "../components/Lynk/Lynk";

export const UserPage = () => {
  const post1 = {
    user: { name: "Reggie" },
    community: { name: "NBA" },
    title: "Where can I get an authentic Michael Myers mask?",
    body: "They've been sold out online for over two months. I'll double the asking price...",
  };
  const post2 = {
    user: { name: "Reggie" },
    community: { name: "Trivia" },
    title: "Entry for the soup contest!",
    body: "I know literally everything about soup. Try me.",
  };
  const post3 = {
    user: { name: "Reggie" },
    community: { name: "Missed Connections" },
    title: "That one girl with the hair",
    body: "Hey, I dropped my slice of pizza on the road, then you laughed. hmu",
  };
  const post4 = {
    user: { name: "Reggie" },
    community: { name: "Astronomy" },
    title: "Are we alone in the universe?",
    content: "I want some sweet purple alien kisses lol",
  };

  const posts = [
    post1,
    post4,
    post1,
    post3,
    post1,
    post2,
    post2,
    post3,
    post2,
    post4,
    post3,
    post4,
    post1,
    post3,
    post2,
    post4,
  ];

  return (
    <>
      {posts.map((post, index) => (
        <Lynk key={index} {...post} />
      ))}
    </>
  );
};
