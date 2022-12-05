import { Opaque } from "./utils";

export type ExternalID = Opaque<string, "ExternalID">;

export function isExternalID(value: string): value is ExternalID {
  const length = value.length;

  return length >= 1 && length <= 255;
}

export function assertExternalID(value: string): asserts value is ExternalID {
  if (!isExternalID(value)) {
    throw new Error(`value "${value}" is not a valid external id.`);
  }
}

export function externalID(value: string): ExternalID {
  assertExternalID(value);
  return value;
}
