import React from 'react';
import S from './styles';

export default ({ number }) => {
  return (
    <S.NodeWrapper>
      <S.NodeText>{number}</S.NodeText>
    </S.NodeWrapper>
  );
};
