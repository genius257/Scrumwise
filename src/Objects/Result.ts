import { IObject } from "../Object";

export type Result<T extends IObject> = IObject & {
  objectType: "Result";
  /** The data version that your data had when the result was created. The data in your account has a version number that is increased whenever any change is made to the data. Thus, the data version uniquely identifies the exact state of your data when the result was created. */
  dataVersion: number;
  /** The result itself, as specified for the method. This is either a primitive type, an object, or an array of objects. */
  result: T; //FIXME: make union, as it is basicly a ANY var type
};
