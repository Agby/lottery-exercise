import { createSelector } from 'reselect';

const makeAttendeeList = (data) => {
  return createSelector(() => {
    const attendeeIds = new Set();
    const attendeeDetails = {};

    data.forEach(({ id, ...other }) => {
      attendeeIds.add(id);
      attendeeDetails[id] = other;
    });

    return { attendeeIds: Array.from(attendeeIds), attendeeDetails };
  });
};

export default makeAttendeeList;
