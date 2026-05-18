import { describe, expect, it } from "vitest";

describe("routes", () => {
  it("has homepage route", () => {
    expect("/").toBe("/");
  });
});
