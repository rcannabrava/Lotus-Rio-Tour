import { describe, expect, it } from "vitest";
import { SITE } from "@/constants/site";

describe("SITE constants", () => {
  const urls = [SITE.whatsappUrl, SITE.instagram, SITE.tripadvisor];

  urls.forEach((url) => {
    it(`${url} should be valid`, () => {
      expect(url).toMatch(/^https?:\/\//);
    });
  });
});
