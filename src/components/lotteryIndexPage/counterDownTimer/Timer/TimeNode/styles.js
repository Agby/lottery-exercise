import styled from 'styled-components';
import { warrior } from '../../../../../utils/color';

export default {
  NodeWrapper: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10px;
    height: 22px;
  `,

  NodeText: styled.div`
    position: absolute;
    color: ${warrior};
  `,
};
