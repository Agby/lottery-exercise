import React, { useState } from 'react';
import Timer from './Timer';
import S from './styles';

export default () => {
  const [inputTime, setInputTime] = useState(0);
  const [time, setTimer] = useState(0);

  const onHandleTelephoneChange = (e) => {
    const val = e.target.value;

    setInputTime(val);
  };

  const handleTimerSetterClick = () => {
    const regexp = /^[0-9\b]+$/;

    if (!regexp.test(inputTime)) {
      // eslint-disable-next-line no-alert
      alert('You are so mean! plz let me go ~~');

      return;
    }

    // minutes to seconds
    setTimer(inputTime * 60);
  };

  return (
    <S.CounterDownTimerWrapper>
      <S.Title>抽獎時間：</S.Title>

      <S.TimeSetterWrapper>
        <S.TimeSetter
          type="tel"
          maxLength="6"
          onChange={onHandleTelephoneChange}
        />
        分鐘
        <S.TimeSetterButton onClick={handleTimerSetterClick}>
          設定
        </S.TimeSetterButton>
      </S.TimeSetterWrapper>

      <Timer time={time} />
    </S.CounterDownTimerWrapper>
  );
};
