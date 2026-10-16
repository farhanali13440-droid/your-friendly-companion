export const WHATSAPP_NUMBER = "923013518388";
export const WHATSAPP_DISPLAY = "0301 3518388";
export const EMAIL = "doctormohsinmehmood@gmail.com";

export const WA_MESSAGES = {
  general:
    "Hello, I would like to learn more about booking a psychiatric consultation with Dr. Mohsin Mehmood.",
  online:
    "Hello, I would like to ask about online consultation availability with Dr. Mohsin Mehmood.",
  clinic:
    "Hello, I would like to ask about in-clinic appointment availability with Dr. Mohsin Mehmood.",
  question: "Hello, I have a question about consulting Dr. Mohsin Mehmood.",
} as const;

export type WaMessage = keyof typeof WA_MESSAGES;

export function whatsappLink(message: WaMessage = "general") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES[message])}`;
}
