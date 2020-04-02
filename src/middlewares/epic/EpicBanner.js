import { mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { Setup } from "../ApiMiddlewares";

export const RequestBannerMiddelewares = action$ =>
  action$.pipe(
    ofType(
      "REQUEST_READ_BANNER",
      "REQUEST_READ_BANNER_BY_ID",
      "REQUEST_ADD_BANNER",
      "REQUEST_DELETE_BANNER",
      "REQUEST_UPDATE_BANNER"
    ),
    mergeMap(async action => {
      try {
        if (action.type === "REQUEST_READ_BANNER") {
          Setup.createEntities(["admin", "promo", "list"]);
          const value = await Setup.endpoints.entities.getOne({
            params: {}
          });
          return {
            type: "GET_BANNER",
            payload: value.data.data.list
          };
        } else if (action.type === "REQUEST_READ_BANNER_BY_ID") {
          Setup.createEntities(["admin", "promo", action.payload]);
          const value = await Setup.endpoints.entities.getAll();
          return {
            type: "GET_BANNER_BY_ID",
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
