import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { fetchAttendeeActions } from '../reducers/attendeeReducer';
import mockAttendee from './mockAttendee';

const timeServer = 'https://worldtimeapi.org/api/ip';

const fetchAttendeeEpic = (action$) => {
  return action$.pipe(
    ofType(fetchAttendeeActions.request),
    switchMap((action) => {
      return ajax.getJSON(timeServer).pipe(
        map(() => {
          const { group } = action?.payload;

          return fetchAttendeeActions.success({
            group,
            attendee: mockAttendee,
          });
        }),
        catchError((error) => {
          return of(fetchAttendeeActions.failure(error.xhr.response));
        }),
      );
    }),
  );
};

export default fetchAttendeeEpic;
