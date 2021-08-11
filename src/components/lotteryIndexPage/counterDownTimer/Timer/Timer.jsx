import React, { useEffect, useState } from 'react';
import TimeNode from './TimeNode';
import S from './styles';

export const secondsToTime = (time) => {
  // get ISO hours minutes and seconds hh:mm:ss
  const t = new Date(0);

  t.setSeconds(time);
  const formattedTime = t.toISOString().substr(11, 8);
  const [hours, minutes, seconds] = formattedTime.split(':');

  return { hours, minutes, seconds };
};

export default ({ timer, onTimesUp }) => {
  const [distance, setDistance] = useState(0);
  const { time } = timer;

  useEffect(() => {
    setDistance(time);
  }, [timer]);

  useEffect(() => {
    const countDownInterval = setInterval(() => {
      if (distance > 0) {
        setDistance(distance - 1);
      }
      if (distance <= 0) {
        clearInterval(countDownInterval);
      }
      // filter init times up
      if (distance <= 0 && time > 0) {
        onTimesUp();
      }
    }, 1000);

    return () => {
      clearInterval(countDownInterval);
    };
  }, [distance]);

  const { hours, minutes, seconds } = secondsToTime(distance);

  return (
    <S.TimerWrapper>
      <TimeNode number={hours[0]} />
      <TimeNode number={hours[1]} />
      :
      <TimeNode number={minutes[0]} />
      <TimeNode number={minutes[1]} />
      :
      <TimeNode number={seconds[0]} />
      <TimeNode number={seconds[1]} />
    </S.TimerWrapper>
  );
};
