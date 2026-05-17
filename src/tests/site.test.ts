import { describe, expect, it } from "vitest";
import { SITE } from "@/constants/site";

describe("SITE constants", () => {
  it("has whatsapp url", () => {
    expect(SITE.whatsappUrl).toContain("wa.me");
  });
});
