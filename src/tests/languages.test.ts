import { describe, expect, it } from "vitest";
import { LANGUAGES } from "@/i18n/languages";

describe("languages", () => {
  it("contains english", () => {
    expect(LANGUAGES.some((l) => l.code === "en")).toBe(true);
  });
});
