import { mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { Setup } from "../ApiMiddlewares";

export const RequestProductBundleMiddelewares = action$ =>
  action$.pipe(
    ofType(
      "REQUEST_READ_PRODUCT_BUNDLE",
      "REQUEST_READ_PRODUCT_BUNDLE_BY_ID",
      "REQUEST_ADD_PRODUCT_BUNDLE",
      "REQUEST_DELETE_PRODUCT_BUNDLE",
      "REQUEST_UPDATE_PRODUCT_BUNDLE"
    ),
    mergeMap(async action => {
      try {
        if (action.type === "REQUEST_READ_PRODUCT_BUNDLE") {
          Setup.createEntities(["admin", "bundle"]);
          const value = await Setup.endpoints.entities.getOne({
            params: {}
          });
          return {
            type: "GET_PRODUCT_BUNDLE",
            payload: value.data.data.list
          };
        } else if (action.type === "REQUEST_READ_PRODUCT_BUNDLE_BY_ID") {
          Setup.createEntities(["admin", "bundle", action.payload]);
          const value = await Setup.endpoints.entities.getAll();
          return {
            type: "GET_PRODUCT_BUNDLE_BY_ID",
            payload: value.data
          };
        }
      } catch (e) {
        const err = e.message;
        return dispatch => {
          dispatch({ type: "ALERT_ERROR", payload: { message: err } });
          setTimeout(() => dispatch({ type: "ALERT_CLEARS" }), 3000);
        };
      }
    })
  );
