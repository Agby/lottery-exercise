import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAttendeeActions } from '../../redux/reducers/attendeeReducer';
import CounterDownTimer from './CounterDownTimer';
import AttendeeList from './AttendeeList';
import S from './styles';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAttendeeActions.request({ group: 'groupA' }));
  }, []);

  return (
    <S.LotteryContainer>
      <CounterDownTimer />
      <AttendeeList />
    </S.LotteryContainer>
  );
};
