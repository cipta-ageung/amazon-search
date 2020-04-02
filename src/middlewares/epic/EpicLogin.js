import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { Setup } from '../ApiMiddlewares';
import Cookies from 'js-cookie';

export const RequestAuthMiddleware = (action$, store) =>
  action$.pipe(
    ofType('REQUEST_AUTH'),
    mergeMap(async action => {
      try {
        const { username, password } = action.payload.request;
        Setup.createEntities(['login']);
        const value = await Setup.endpoints.entities.create({
          user: username,
          password: password,
          type:'web'
        });
        //console.log(action.payload.history);
        action.payload.history.go('/homepage');
        // window.location.replace('/');
        return {
          type: 'GET_AUTH_TOKEN',
          payload: value.data
        };
      } catch (e) {
        const err = e.message;
        return dispatch => {
          dispatch({ type: 'ALERT_ERROR', payload: { message: err } });
          setTimeout(() => dispatch({ type: 'ALERT_CLEARS' }), 3000);
        };
      }
    })
  );

export const RequestLogOutMiddleware = (action$, store) =>
  action$.pipe(
    ofType('REQUEST_LOGOUT'),
    mergeMap(async action => {
      try {
        Cookies.remove('ACCESS_TOKEN', { path: '/' });
        window.location.replace('/login');
        return {
          type: 'DO_LOGOUT'
        };
      } catch (e) {
        return dispatch => {
          dispatch({
            type: 'ALERT_ERROR',
            payload: { message: 'Error Logout' }
          });
          setTimeout(() => dispatch({ type: 'ALERT_CLEARS' }), 3000);
        };
      }
    })
  );
