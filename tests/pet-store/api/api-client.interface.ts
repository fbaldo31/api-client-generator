/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from './models';

export interface APIClientInterface {

  /**
   * Returns a single pet
   * Response generated for [ 200 ] HTTP response code.
   */
  getPetById(
    args: {
      petId: number,  // ID of pet to return
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pet>;

  /**
   * Response generated for [ missing ] HTTP response code.
   */
  updatePetWithForm(
    args: {
      petId: number,  // ID of pet that needs to be updated
      name?: string,  // (optional) Updated name of the pet
      status?: string,  // (optional) Updated status of the pet
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Response generated for [ missing ] HTTP response code.
   */
  deletePet(
    args: {
      apiKey?: string,
      petId: number,  // Pet id to delete
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  uploadFile(
    args: {
      petId: number,  // ID of pet to update
      additionalMetadata?: string,  // (optional) Additional data to pass to server
      file?: File,  // (optional) file to upload
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ApiResponse>;

  /**
   * Response generated for [ missing ] HTTP response code.
   */
  addPet(
    args: {
      body: models.Pet,  // Pet object that needs to be added to the store
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Response generated for [ missing ] HTTP response code.
   */
  updatePet(
    args: {
      body: models.Pet,  // Pet object that needs to be added to the store
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Multiple status values can be provided with comma separated strings
   * Response generated for [ 200 ] HTTP response code.
   */
  findPetsByStatus(
    args: {
      status: string[],  // Status values that need to be considered for filter
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pet[]>;

  /**
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   * Response generated for [ 200 ] HTTP response code.
   */
  findPetsByTags(
    args: {
      tags: string[],  // Tags to filter by
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pet[]>;

  /**
   * Returns a map of status codes to quantities
   * Response generated for [ 200 ] HTTP response code.
   */
  getInventory(
    requestHttpOptions?: HttpOptions
  ): Observable<object>;

  /**
   * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
   * Response generated for [ 200 ] HTTP response code.
   */
  getOrderById(
    args: {
      orderId: number,  // ID of pet that needs to be fetched
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Order>;

  /**
   * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
   * Response generated for [ missing ] HTTP response code.
   */
  deleteOrder(
    args: {
      orderId: number,  // ID of the order that needs to be deleted
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  placeOrder(
    args: {
      body: models.Order,  // order placed for purchasing the pet
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Order>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserByName(
    args: {
      username: string,  // The name that needs to be fetched. Use user1 for testing. 
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.User>;

  /**
   * This can only be done by the logged in user.
   * Response generated for [ missing ] HTTP response code.
   */
  updateUser(
    args: {
      username: string,  // name that need to be updated
      body: models.User,  // Updated user object
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * This can only be done by the logged in user.
   * Response generated for [ missing ] HTTP response code.
   */
  deleteUser(
    args: {
      username: string,  // The name that needs to be deleted
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  loginUser(
    args: {
      username: string,  // The user name for login
      password: string,  // The password for login in clear text
    },
    requestHttpOptions?: HttpOptions
  ): Observable<string>;

  /**
   * Response generated for [ missing ] HTTP response code.
   */
  logoutUser(
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * This can only be done by the logged in user.
   * Response generated for [ missing ] HTTP response code.
   */
  createUser(
    args: {
      body: models.User,  // Created user object
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Response generated for [ missing ] HTTP response code.
   */
  createUsersWithArrayInput(
    args: {
      body: any,  // List of user object
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

  /**
   * Response generated for [ missing ] HTTP response code.
   */
  createUsersWithListInput(
    args: {
      body: any,  // List of user object
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void>;

}
