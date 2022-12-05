import { IObject } from "../Object";

export type CustomFieldValue = IObject & {
  objectType: "CustomFieldValue";
  /** The id of the custom field value. */
  id: string;
  /** The id of the project that contains the custom field value. */
  projectID: string;
  /** The id of the custom field. */
  customFieldID: string;
  /** The object type of the object that has the custom field value, for example `BacklogItem`. */
  ownerObjectType: string; //FIXME: extract relevant objectType values here.
  /** The id of the object that has the custom field value. */
  ownerObjectID: string;
  /** The value of the custom field on the object. This is always a string, regardless of the custom field type. If the custom field has no value on an object, there is no corresponding CustomFieldValue object, so absence of a value is represented by absence of a CustomFieldValue object, not a value of `null`. */
  value: string;
};
