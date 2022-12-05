import { UserId } from "./User";

export default class Item {
  readonly id: ItemId;
  readonly createdBy: UserId;
}

export type ItemId = string & { _guard: "item_id" };
