import media from "../media";

describe("media helper function", () => {
  it("should output a styled css when given proper params", () => {
    const output = media.phone`width: 100%;`;
    expect(output).toMatchSnapshot();
  });
});
