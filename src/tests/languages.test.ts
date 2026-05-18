import { describe, expect, it } from "vitest";

import { LANGUAGES } from "@/i18n/languages";

describe("languages config", () => {
  const expectedLanguages = ["en", "pt-BR", "es-ES"];

  expectedLanguages.forEach((code) => {
    it(`contains ${code}`, () => {
      expect(LANGUAGES.some((lang) => lang.code === code)).toBe(true);
    });
  });
});
