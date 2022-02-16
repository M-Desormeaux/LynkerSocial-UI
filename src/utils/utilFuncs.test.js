import { dateFormat } from "./utilFuncs";

describe("Returns a valid date", () => {
  test("Returns formatted Feb 15, 2015", () => {
    const date = new Date("Feb 15, 2015");
    const expectedDate = "2 | 15 | 2015";

    expect(dateFormat(date)).toBe(expectedDate);
  });
});
