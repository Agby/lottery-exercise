import styled from 'styled-components';
import { black } from '../../utils/color';

export default {
  LotteryResultContainer: styled.div`
    display: flex;
    flex-flow: column nowrap;
  `,
  GoBackButton: styled.button`
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 50px;
    background: transparent;
    border: 0px solid;
    cursor: pointer;

    &:hover {
      color: orange;
    }
  `,
  LotteryResult: styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    color: ${black};
  `,
  LotteryResultImage: styled.img`
    width: 300px;
    height: 300px;
  `,
  LotteryResultName: styled.div`
    margin: 10px;
  `,
  LotteryResultDescription: styled.div``,
};
