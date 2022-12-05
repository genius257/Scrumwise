import { IObject } from "../Object";

export type Error = IObject & {
  objectType: "Error";
  /** A string that identifies the type of error, for example `InvalidParameter`. */
  errorID: ErrorID;
  /** An error message. */
  errorMessage: string;
};

export enum ErrorID {
  /** The request is not valid. */
  InvalidRequest = "InvalidRequest",
  /** The request URL is not valid. */
  InvalidURL = "InvalidURL",
  /** The HTTP Basic authentication info is missing. */
  AuthenticationRequired = "AuthenticationRequired",
  /** The HTTP Basic authentication info is not valid. */
  InvalidAuthenticationInfo = "InvalidAuthenticationInfo",
  /** The username that you have specified in the HTTP Basic authentication is not a valid email address of a user in your account. */
  InvalidUserEmailAddress = "InvalidUserEmailAddress",
  /** The password that you have specified in the HTTP Basic authentication is not a valid API key. */
  InvalidAPIKey = "InvalidAPIKey",
  /** APINotAvailable */
  APINotAvailable = "APINotAvailable",
  /** The API is not available right now due to maintenance. */
  DuringMaintenance = "DuringMaintenance",
  /** An internal server error has occurred. */
  InternalServerError = "InternalServerError",
  /** Your Scrumwise company account has been closed. */
  CompanyAccountClosed = "CompanyAccountClosed",
  /** Your access to the API has been turned off. Please contact us at support@scrumwise.com. */
  APIAccessNotAllowed = "APIAccessNotAllowed",
  /** The API is too busy to handle your request right now. Please try again later. */
  APIBusy = "APIBusy",
  /** You have reached a limit on the number of requests you can make in the API. Please contact us at support@scrumwise.com. */
  APILimitReached = "APILimitReached",
  /** You have too many ongoing requests to the API. */
  TooManyOngoingRequests = "TooManyOngoingRequests",
  /** The API has no method with the name you have specified. */
  InvalidMethodName = "InvalidMethodName",
  /** A parameter is invalid. */
  InvalidParameter = "InvalidParameter",
  /** A required parameter is missing. */
  MissingParameter = "MissingParameter",
  /** An object that you have specified does not exist. */
  ObjectNotFound = "ObjectNotFound",
  /** A requirement of the method is not satified. */
  RequirementNotSatisfied = "RequirementNotSatisfied",
  /** The user that you are performing the request on behalf of does not have permission to access the project. */
  UserCannotAccessProject = "UserCannotAccessProject",
  /** The user that you are performing the request on behalf of does not have sufficient permissions to perform this action. */
  UserHasInsufficientPermissions = "UserHasInsufficientPermissions",
  /** There is already an object of the particular object type that has the external id that you have specified. */
  ObjectWithExternalIDAlreadyExists = "ObjectWithExternalIDAlreadyExists",
  /** A request with the specified request id has already been executed successfully. */
  RequestAlreadyExecuted = "RequestAlreadyExecuted",
  /** The current data version of your account does not match the required data version that you have specified. */
  RequiredDataVersionNotMatching = "RequiredDataVersionNotMatching"
}
