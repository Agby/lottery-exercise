import styled from 'styled-components';
import { white } from '../../../../utils/color';

export default {
  ItemWrapper: styled.div`
    display: flex;
    align-items: center;
    height: 12vh;
    color: ${white};
  `,
  ItemImage: styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
  `,
  ItemName: styled.div`
    margin-right: 20px;
    color: ${white};
  `,
};
