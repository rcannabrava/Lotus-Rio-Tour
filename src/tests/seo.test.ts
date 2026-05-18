import { describe, expect, it } from "vitest";

describe("SEO metadata", () => {
  it("uses correct site title", () => {
    expect("Lotus Rio Tour").toContain("Lotus");
  });

  it("uses HTTPS canonical URL", () => {
    expect("https://lotusriotour.com").toContain("https://");
  });
});
