import { describe, it, expect } from "vitest";
import { add } from "./math";

describe("Функія add", () => {
  it("Має правильно додавати 2 числа", () => {
    expect(add(2, 3)).toBe(5);
  });
});
