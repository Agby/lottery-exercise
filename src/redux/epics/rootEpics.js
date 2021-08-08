import { combineEpics } from 'redux-observable';
import fetchAttendeeEpic from './fetchAttendeeEpic';

export default combineEpics(fetchAttendeeEpic);
