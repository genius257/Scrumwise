import { Opaque } from "./utils";

/**
 * Epoch Unix Timestamp.
 *
 * The number of milliseconds since January 1, 1970 00:00:00 GMT
 */
export type Timestamp = Opaque<number, "Timestamp">;

export function isTimestamp(value: number): value is Timestamp {
  return Number.isInteger(value);
}

export function assertTimestamp(value: number): asserts value is Timestamp {
  if (!isTimestamp(value)) {
    throw new Error(`value "${value}" is not a valid timestamp.`);
  }
}

export function timestamp(value: number): Timestamp {
  assertTimestamp(value);
  return value;
}
