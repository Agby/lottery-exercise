import styled from 'styled-components';
import { warrior, black, white } from '../../../utils/color';

export default {
  CounterDownTimerWrapper: styled.div`
    box-sizing: border-box;
    width: 50vw;
    min-width: 355px;
    height: 500px;
    padding: 10px;
  `,
  Title: styled.h3`
    color: ${warrior};
  `,
  TimeSetterWrapper: styled.div`
    display: flex;
    align-items: center;
  `,
  TimeSetter: styled.input`
    width: 100px;
    height: 30px;
    margin: 3px;
  `,
  TimeSetterButton: styled.button`
    width: 50px;
    height: 30px;
    margin-left: 20px;
    color: ${white};
    background: ${black};
    border: 0px solid;
    border-radius: 3px;
    cursor: pointer;
    opacity: 1;
    transition: opacity ease-in-out 0.2s;

    &:hover {
      opacity: 0.8;
    }
  `,
};
