import styled from 'styled-components';
import { black } from '../../../utils/color';

export default {
  AttendeeListWrapper: styled.div`
    width: 50vw;
    min-width: 355px;
    padding: 20px;
    overflow: hidden;
  `,
  AttendeeList: styled.div`
    height: 50vh;
    padding: 20px;
    overflow-y: auto;
    background: ${black};
  `,
};
