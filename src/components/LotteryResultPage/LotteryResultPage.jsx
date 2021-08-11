import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAttendeeActions } from '../../redux/reducers/attendeeReducer';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAttendeeActions.request({ group: 'groupA' }));
  }, [dispatch]);

  return <>resultPage</>;
};
