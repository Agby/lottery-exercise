import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAttendeeActions } from '../../redux/reducers/attendeeReducer';
import CounterDownTimer from './counterDownTimer';
import AttendeeList from './attendeeList';
import S from './styles';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAttendeeActions.request({ group: 'groupA' }));
  }, [dispatch]);

  return (
    <S.LotteryContainer>
      <CounterDownTimer />
      <AttendeeList />
    </S.LotteryContainer>
  );
};
