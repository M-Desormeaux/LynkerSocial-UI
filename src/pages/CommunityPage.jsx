import { Lynk } from "../components/Lynk/Lynk";

export const CommunityPage = () => {
  const post1 = {
    user: { name: "Harry" },
    community: { name: "Squelching Mates" },
    title: "Actively Seeking Mates",
    content: "Group Squelching Session on Thursday",
  };
  const post2 = {
    user: { name: "Jackie" },
    community: { name: "Sci-Fi" },
    title: "Future Girl AMA",
    content: "I'm from tomorrow lol",
  };
  const post3 = {
    user: { name: "Reggie" },
    community: { name: "Missed Connections" },
    title: "That one girl with the hair",
    content:
      "Hey, I dropped my slice of pizza on the road, then you laughed. hmu",
  };
  const post4 = {
    user: { name: "Chandler" },
    community: { name: "Oceanography" },
    title: "Anyone see that freaky squid thing?",
    content: "It looked like a 30ft spider with eyes the size of your mom lol",
  };

  const posts = [
    post1,
    post3,
    post3,
    post4,
    post2,
    post4,
    post1,
    post2,
    post2,
    post3,
    post4,
    post1,
  ];

  return (
    <>
      {posts.map((post, index) => (
        <Lynk key={index} {...post} />
      ))}
    </>
  );
};
