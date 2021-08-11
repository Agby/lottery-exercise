import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { fetchAttendeeActions } from '../reducers/attendeeReducer';

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

const mockAttendee = [
  {
    id: 'a',
    name: 'Tim',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGuD7q6JD6mTbBxKj1BF4Avqqw5uWmVQAbg&usqp=CAU',
    description: 'meow meow',
  },
  {
    id: 'b',
    name: 'Jenny',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkYZHMF17fZWWFLsJhr63qvHVZxo21BLRhA&usqp=CAU',
    description: 'meow meow',
  },
  {
    id: 'c',
    name: 'Parry',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDuh1tbfQuwmSSfuB8CfnOn7vG0oSr0s2FhA&usqp=CAU',
    description: 'meow meow',
  },
  {
    id: 'd',
    name: 'Danny',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGuD7q6JD6mTbBxKj1BF4Avqqw5uWmVQAbg&usqp=CAU',
    description: 'meow meow',
  },
  {
    id: 'e',
    name: 'Dylan',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkYZHMF17fZWWFLsJhr63qvHVZxo21BLRhA&usqp=CAU',
    description: 'meee meee',
  },
  {
    id: 'f',
    name: 'Bingo',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDuh1tbfQuwmSSfuB8CfnOn7vG0oSr0s2FhA&usqp=CAU',
    description: 'meow meow',
  },
  {
    id: 'steve',
    name: 'Steve',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGuD7q6JD6mTbBxKj1BF4Avqqw5uWmVQAbg&usqp=CAU',
    description: 'You know...Things always out of your thought.',
  },
];

export default fetchAttendeeEpic;
