import produce from 'immer';
import { getType, createAsyncAction } from 'typesafe-actions';

export const fetchAttendeeActions = createAsyncAction(
  'list/GET_ATTENDEE',
  'list/GET_ATTENDEE_SUCCESS',
  'list/GET_ATTENDEE_Failure',
)();

export const defaultState = {
  isLoading: false,
  attendee: [
    { id: 'foo', name: 'Tim' },
    { id: 'bar', name: 'jenny' },
  ],
  hasError: false,
};

export default produce((draft, actions) => {
  switch (actions.type) {
    case getType(fetchAttendeeActions.request): {
      draft.isLoading = true;
      break;
    }
    case getType(fetchAttendeeActions.success): {
      const { attendee = [] } = actions?.payload;

      draft.hasError = false;
      draft.isLoading = false;
      draft.attendee = [...attendee];
      break;
    }
    case getType(fetchAttendeeActions.failure): {
      draft.isLoading = false;
      draft.hasError = true;
      break;
    }
    default:
      break;
  }
}, defaultState);
