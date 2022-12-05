import { Opaque } from "./utils";

/** A string in the format YYYY-MM-DD */
export type DateString = Opaque<string, "DateString">;

const dateExpression = /\d{4}-\d{2}-\d{2}/;

export function isDateString(value: string): value is DateString {
  return dateExpression.test(value);
}

export function assertDateString(value: string): asserts value is DateString {
  if (!isDateString(value)) {
    throw new Error(`value "${value}" is not a valid date format.`);
  }
}

export function dateString(value: string): DateString {
  assertDateString(value);
  return value;
}
