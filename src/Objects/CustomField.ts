import { IObject } from "../Object";

export type CustomField = IObject & {
  objectType: "CustomField";
  /** The id of the custom field. */
  id: string;
  /** The id of the project that contains the custom field. */
  projectID: string;
  /** The name of the custom field. */
  name: string;
  /** The description of the custom field, or `null` if none. */
  description: string | null;
  /** The object types that have the custom field, at least one. */
  ownerObjectTypes: string[]; //FIXME: should we use [string, ...string[]] to adress "at least one", at the cost of readabillity?
  /** The backlog item types that have the custom field, or `null` if the custom field is for all backlog item types or the custom field is not for backlog items. */
  ownerBacklogItemTypes: string[] | null;
  /** The type of the custom field. */
  type: Type;
  /** The unit of the custom field, or `null` if none. */
  unit: string | null;
  /** The options that the user can choose from in the custom field, or `null` if none. */
  options: string[] | null;
  /** True if the custom field is required, false if not. */
  isRequired: boolean;
};

export type Type =
  | "Text (single line)"
  | "Text (multiple lines)"
  | "Checkbox"
  | "Integer"
  | "Number"
  | "Date"
  | "Link"
  | "Person"
  | "Team"
  | "Release"
  | "Sprint"
  | "Dropdown"
  | "Radio buttons"
  | "Checkboxes"
  | "List (single selection)"
  | "List (multiple selections)";
