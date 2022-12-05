import { Color } from "../Color";
import { IObject } from "../Object";
import { RetrospectiveCard } from "./RetrospectiveCard";

export type RetrospectiveColumn = IObject & {
  objectType: "RetrospectiveColumn";
  /** The name of the column. */
  name: string;
  /** The color of the column, or `null` if none. */
  color: Color;
  /** The retrospective cards in the column, empty if none. */
  cards: RetrospectiveCard[];
};
