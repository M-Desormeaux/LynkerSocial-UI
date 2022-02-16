import { render, screen } from "@testing-library/react";
import { dateFormat } from "../../utils/utilFuncs";
import { CommunityLynk } from "./CommunityLynk";

describe("Properly render CommunityLynk", () => {
  test("CommunityLynk renders, and with proper content", () => {
    const props = {
      user: { name: "Steve" },
      name: "I need socks",
      postDate: new Date(),
      description: "Yes, socks",
    };

    render(<CommunityLynk {...props} />);

    expect(screen.getByText(props.user.name)).toBeInTheDocument();
    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(screen.getByText(dateFormat(props.postDate))).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });
});
