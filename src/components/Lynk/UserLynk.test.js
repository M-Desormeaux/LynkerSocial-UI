import { render, screen } from "@testing-library/react";
import { dateFormat } from "../../utils/utilFuncs";
import { UserLynk } from "./UserLynk";

describe("Properly render CommunityLynk", () => {
  test("CommunityLynk renders, and with proper content", () => {
    const props = {
      name: "Steve",
      creationDate: new Date(),
      birthday: new Date("Dec 24, 1994"),
    };

    render(<UserLynk {...props} />);

    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(
      screen.getByText(dateFormat(props.creationDate))
    ).toBeInTheDocument();
    expect(screen.getByText(dateFormat(props.birthday))).toBeInTheDocument();
  });
});
