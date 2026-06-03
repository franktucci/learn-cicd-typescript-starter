import { describe, expect, test } from "vitest";
import { getAPIKey } from "../../src/api/auth";

describe("get auth", () => {
  test("regular bearer token returns token", () => {
    expect(getAPIKey({authorization: "ApiKey token"})).equals("token");
  });

  test("missing apikey", () => {
    expect(getAPIKey({authorization: "notAnApi token"})).toBeNull();
  });

  test("missing auth alltogether", () => {
    expect(getAPIKey({notauthorization: "ApiKey token"})).toBeNull();
  });
});
