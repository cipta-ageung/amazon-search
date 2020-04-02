import { mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { Setup } from "../ApiMiddlewares";

export const RequestCategoryMiddelewares = action$ =>
  action$.pipe(
    ofType(
      "REQUEST_READ_CATEGORY",
      "REQUEST_READ_CATEGORY_BY_ID",
      "REQUEST_ADD_CATEGORY",
      "REQUEST_DELETE_CATEGORY",
      "REQUEST_UPDATE_CATEGORY"
    ),
    mergeMap(async action => {
      try {
        if (action.type === "REQUEST_READ_CATEGORY") {
          Setup.createEntities(["admin", "category"]);
          const value = await Setup.endpoints.entities.getOne({
            params: {}
          });
          return {
            type: "GET_CATEGORY",
            payload: value.data.data.list
          };
        } else if (action.type === "REQUEST_READ_CATEGORY_BY_ID") {
          Setup.createEntities(["admin", "category", action.payload]);
          const value = await Setup.endpoints.entities.getAll();
          return {
            type: "GET_CATEGORY_BY_ID",
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
