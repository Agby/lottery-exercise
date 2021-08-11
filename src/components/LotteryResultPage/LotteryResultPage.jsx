import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAttendeeActions } from '../../redux/reducers/attendeeReducer';
import S from './styles';

export default () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { image, name, description } = useSelector((state) => {
    return (
      state.attendeeReducer?.attendeeDetails?.[location?.state?.resultId] ?? {}
    );
  });

  useEffect(() => {
    if (!location?.state?.resultId) {
      history.replace('/');
    } else {
      dispatch(fetchAttendeeActions.request({ group: 'groupA' }));
    }
  }, []);

  const handleClickGoBack = () => {
    history.goBack();
  };

  return (
    <S.LotteryResultContainer>
      <S.GoBackButton onClick={handleClickGoBack}>{'< Go back'}</S.GoBackButton>

      <S.LotteryResult>
        <S.LotteryResultImage src={image} />
        <S.LotteryResultName>{name}</S.LotteryResultName>
        <S.LotteryResultDescription>{description}</S.LotteryResultDescription>
      </S.LotteryResult>
    </S.LotteryResultContainer>
  );
};
