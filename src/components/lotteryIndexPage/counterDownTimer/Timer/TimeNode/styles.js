import styled from 'styled-components';
import { warrior } from '../../../../../utils/color';

export default {
  NodeWrapper: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 22px;
  `,

  NodeText: styled.div`
    position: absolute;
    color: ${warrior};
  `,
};
