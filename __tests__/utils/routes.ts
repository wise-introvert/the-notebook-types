import { getRoute } from "../../src/utils";

describe("routes", () => {
  describe("getRoute", () => {
    it('returns "/api/v1/user/auth" when called with "user" and "auth"', () => {
      const sub: string = "user";
      const leaf: string = "auth";
      const route: string = getRoute(sub, leaf);
      expect(route).toBe("/api/v1/user/auth");
    });

    it('returns "/api/v1/user" when called with just "user"', () => {
      const sub: string = "user";
      const route: string = getRoute(sub);
      expect(route).toBe("/api/v1/user");
    });

    it('returns "/api/v1/user/auth" when called with "/user" and "/auth"', () => {
      const sub: string = "/user";
      const leaf: string = "/auth";
      const route: string = getRoute(sub, leaf);
      expect(route).toBe("/api/v1/user/auth");
    });

    it('returns "/api/v1/user" when called with just "/user"', () => {
      const sub: string = "/user";
      const route: string = getRoute(sub);
      expect(route).toBe("/api/v1/user");
    });

    it('returns "/custom-base/user/auth" when options object with base is provided along with "/user" and "/auth"', () => {
      const options: any = {
        base: "/custom-base"
      };
      const sub: string = "/user";
      const leaf: string = "/auth";
      const route: string = getRoute(sub, leaf, options);
      expect(route).toBe("/custom-base/user/auth");
    });

    it("throws an error when no arguments are provided", () => {
      expect(getRoute).toThrow(Error);
    });
  });
});
