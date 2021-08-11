import React from 'react';
import { useSelector } from 'react-redux';
import S from './styles';

export default ({ id }) => {
  const { image, name, description } = useSelector((state) => {
    return state.attendeeReducer?.attendeeDetails?.[id] ?? {};
  });

  return (
    <S.ItemWrapper>
      <S.ItemImage src={image} />
      <S.ItemName>{name}</S.ItemName>
      <S.ItemName>{description}</S.ItemName>
    </S.ItemWrapper>
  );
};
