import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';
import S from './styles';

export default () => {
  const attendeeIds = useSelector((state) => {
    return state.attendeeReducer?.attendeeIds ?? [];
  });
  const isFetching = useSelector((state) => {
    return state.attendeeReducer?.isFetching;
  });

  return (
    <S.AttendeeListWrapper>
      <h2>參與抽獎者名單</h2>
      <S.AttendeeList>
        {isFetching ? (
          <p>loading...</p>
        ) : (
          attendeeIds.map((id) => {
            return <ListItem key={`item-${id}`} id={id} />;
          })
        )}
      </S.AttendeeList>
    </S.AttendeeListWrapper>
  );
};
