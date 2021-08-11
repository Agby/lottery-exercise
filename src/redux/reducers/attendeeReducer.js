import produce from 'immer';
import { getType, createAsyncAction } from 'typesafe-actions';
import makeAttendeeList from '../selector/processAttendeeList';

export const fetchAttendeeActions = createAsyncAction(
  'list/GET_ATTENDEE',
  'list/GET_ATTENDEE_SUCCESS',
  'list/GET_ATTENDEE_Failure',
)();

export const defaultState = {
  isFetching: false,
  attendeeIds: ['alpha', 'beta'],
  attendeeDetails: {
    alpha: { name: 'Tim' },
    beta: { name: 'Jessica' },
  },
  hasError: false,
};

export default produce((draft, actions) => {
  switch (actions.type) {
    case getType(fetchAttendeeActions.request): {
      draft.isFetching = true;
      break;
    }
    case getType(fetchAttendeeActions.success): {
      const { attendee = [] } = actions?.payload;

      const { attendeeIds, attendeeDetails } = makeAttendeeList(attendee)();

      draft.hasError = false;
      draft.isFetching = false;
      draft.attendeeIds = attendeeIds;
      draft.attendeeDetails = attendeeDetails;
      break;
    }
    case getType(fetchAttendeeActions.failure): {
      draft.isFetching = false;
      draft.hasError = true;
      break;
    }
    default:
      break;
  }
}, defaultState);
