/**
 * Helper for generating Opaque types.
 *
 * @template T Opaque base type
 * @template K Opaque unique key
 */
export type Opaque<T, K> = T & { __opaque__: K };

export type Optional<T> = T | null;
