import React, { useState } from 'react';
import Timer from './Timer';
import S from './styles';

export default () => {
  const [inputTime, setInputTime] = useState(0);
  const [timer, setTimer] = useState({ time: 0, hash: Math.random() });

  const onHandleTelephoneChange = (e) => {
    const val = e.target.value;

    setInputTime(val);
  };

  const handleTimerSetterClick = () => {
    const regexp = /^[0-9\b]+$/;

    if (!regexp.test(inputTime)) {
      // eslint-disable-next-line no-alert
      alert('You are so mean!! Invalid input.');

      return;
    }

    // minutes to seconds hash for reset same time
    setTimer({ time: inputTime * 60, hash: Math.random() });
  };

  const onTimesUp = () => {
    console.log('times up');
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

      <Timer timer={timer} onTimesUp={onTimesUp} />
    </S.CounterDownTimerWrapper>
  );
};
