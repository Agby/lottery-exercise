import React, { useEffect, useState } from 'react';
import TimeNode from './TimeNode';
import S from './styles';

export const formatTime = (time) => {
  // get ISO hours minutes and seconds hh:mm:ss
  const t = new Date(0);

  t.setSeconds(time);
  const formattedTime = t.toISOString().substr(11, 8);

  const [hours, minutes, seconds] = formattedTime.split(':');

  return { hours, minutes, seconds };
};

export default ({ time }) => {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    setDistance(time);
  }, [time]);

  useEffect(() => {
    const countDownInterval = setInterval(() => {
      if (distance > 0) {
        setDistance(distance - 1);
      } else {
        clearInterval(countDownInterval);
      }
    }, 1000);

    return () => {
      clearInterval(countDownInterval);
    };
  }, [distance]);

  const { hours, minutes, seconds } = formatTime(distance);

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
