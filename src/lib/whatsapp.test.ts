import { describe, expect, it } from "vitest";
import { whatsappLink } from "./whatsapp";

describe("whatsappLink", () => {
  it("uses the doctor's WhatsApp number 923013518388", () => {
    expect(whatsappLink()).toMatch(/^https:\/\/wa\.me\/923013518388\?text=/);
  });

  it("URL-encodes the online consultation message", () => {
    const text = new URL(whatsappLink("online")).searchParams.get("text");
    expect(text).toBe(
      "Hello, I would like to ask about online consultation availability with Dr. Mohsin Mehmood.",
    );
  });
});
