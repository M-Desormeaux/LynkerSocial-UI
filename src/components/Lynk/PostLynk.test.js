import { render, screen } from "@testing-library/react";
import { dateFormat } from "../../utils/utilFuncs";
import { PostLynk } from "./PostLynk";

describe("Properly render CommunityLynk", () => {
  test("CommunityLynk renders, and with proper content", () => {
    const props = {
      user: { name: "Steve" },
      community: { name: "All" },
      title: "I need socks",
      creationDate: new Date(),
      body: "Yes, socks",
    };

    render(<PostLynk {...props} />);

    expect(screen.getByText(props.user.name)).toBeInTheDocument();
    expect(screen.getByText(props.community.name)).toBeInTheDocument();
    expect(
      screen.getByText(dateFormat(props.creationDate))
    ).toBeInTheDocument();
    expect(screen.getByText(props.body)).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });
});
