import { mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { Setup } from "../ApiMiddlewares";

export const RequestProductMiddelewares = action$ =>
  action$.pipe(
    ofType(
      "REQUEST_READ_PRODUCT",
      "REQUEST_READ_PRODUCT_BY_ID",
      "REQUEST_ADD_PRODUCT",
      "REQUEST_DELETE_PRODUCT",
      "REQUEST_UPDATE_PRODUCT"
    ),
    mergeMap(async action => {
      try {
        if (action.type === "REQUEST_READ_PRODUCT") {
          Setup.createEntities(["admin", "product"]);
          const value = await Setup.endpoints.entities.getOne({
            params: {}
          });
          return {
            type: "GET_PRODUCT",
            payload: value.data.data.list
          };
        } else if (action.type === "REQUEST_READ_PRODUCT_BY_ID") {
          Setup.createEntities(["admin", "product", action.payload]);
          const value = await Setup.endpoints.entities.getAll();
          return {
            type: "GET_PRODUCT_BY_ID",
            payload: value.data
          };
        }
      }  
      catch (e) {
        const err = e.message;
        return dispatch => {
          dispatch({ type: "ALERT_ERROR", payload: { message: err } });
          setTimeout(() => dispatch({ type: "ALERT_CLEARS" }), 3000);
        };
      }
    })
  );

  export const RequestProductNewMiddelewares = action$ =>
  action$.pipe(
    ofType(
      "REQUEST_READ_PRODUCT_NEW"
    ),
    mergeMap(async action => {
      try {
        if (action.type === "REQUEST_READ_PRODUCT_NEW") {
          Setup.createEntities(["product", "new"]);
          const value = await Setup.endpoints.entities.getOne({
            params: {}
          });
          return {
            type: "GET_PRODUCT_NEW",
            payload: value.data.data
          };
        }
      }  
      catch (e) {
        const err = e.message;
        return dispatch => {
          dispatch({ type: "ALERT_ERROR", payload: { message: err } });
          setTimeout(() => dispatch({ type: "ALERT_CLEARS" }), 3000);
        };
      }
    })
  );

  export const RequestProductTopMiddelewares = action$ =>
  action$.pipe(
    ofType(
      "REQUEST_READ_PRODUCT_TOP"
    ),
    mergeMap(async action => {
      try {
        if (action.type === "REQUEST_READ_PRODUCT_TOP") {
          Setup.createEntities(["product", "top"]);
          const value = await Setup.endpoints.entities.getOne({
            params: {}
          });
          return {
            type: "GET_PRODUCT_TOP",
            payload: value.data.data
          };
        }
      }  
      catch (e) {
        const err = e.message;
        return dispatch => {
          dispatch({ type: "ALERT_ERROR", payload: { message: err } });
          setTimeout(() => dispatch({ type: "ALERT_CLEARS" }), 3000);
        };
      }
    })
  );
