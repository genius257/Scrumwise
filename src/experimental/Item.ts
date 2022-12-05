import { Opaque } from "../utils";
import { UserId } from "./User";

export default class Item {
  readonly id: ItemId;
  readonly createdBy: UserId;
}

export type ItemId = Opaque<string, "item_id">;
