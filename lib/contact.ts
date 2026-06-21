export interface ContactInput {
  name: string;
  email: string;
  message: string;
  /** Optional — not required for a valid submission. */
  phone?: string;
  /** Optional hotel / company name. */
  company?: string;
}

export type ContactField = "name" | "email" | "message";

/** Maps each invalid field to the message key the UI should display. */
export type ContactErrors = Partial<Record<ContactField, "invalidName" | "invalidEmail" | "invalidMessage">>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_MIN = 10;

/** Validate contact input. Returns message keys, not localized text. */
export function validateContact(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {};
  if (input.name.trim().length === 0) errors.name = "invalidName";
  if (!EMAIL_RE.test(input.email.trim())) errors.email = "invalidEmail";
  if (input.message.trim().length < MESSAGE_MIN) errors.message = "invalidMessage";
  return errors;
}

export function isValid(errors: ContactErrors): boolean {
  return Object.keys(errors).length === 0;
}
