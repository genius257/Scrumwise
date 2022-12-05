import { Opaque } from "../utils";

export default class User {
  readonly id: UserId;

  public static isValidId(value: string): value is UserId {
    //TODO: we could verify this agenst a list of valid users from backend.
    return /\d{3}-\d{4}-\d{3}/.test(value);
  }

  public static assertValidId(value: string): asserts value is UserId {
    if (this.isValidId) {
      throw new Error(`input "${value}" is not a valid user reference`);
    }
  }

  public static fromId(ref: UserId): User {
    //
  }

  public static fromUnsafeId(ref: string): User {
    this.assertValidId(ref);
    return this.fromId(ref);
  }
}

export type UserId = Opaque<string, "user_id">;
