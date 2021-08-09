import { secondsToTime } from '../Timer';

describe('Timer', () => {
  describe('secondsToTime', () => {
    it('Should work as expect', () => {
      const inputSeconds = 3735;
      const { hours, minutes, seconds } = secondsToTime(inputSeconds);

      expect(hours).toBe('01');
      expect(minutes).toBe('02');
      expect(seconds).toBe('15');
    });

    it('Should work as expect if inputSeconds is zero', () => {
      const inputSeconds = 0;
      const { hours, minutes, seconds } = secondsToTime(inputSeconds);

      expect(hours).toBe('00');
      expect(minutes).toBe('00');
      expect(seconds).toBe('00');
    });
  });
});
