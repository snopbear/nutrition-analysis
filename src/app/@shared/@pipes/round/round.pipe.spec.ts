import { RoundPipe } from './round.pipe';

describe('Pipe: Rounde', () => {
  it('Should display 1071.6119741250002 if it 1071.61', () => {
    let pipe = new RoundPipe();
    expect(pipe.transform(1071.6119741250002)).toEqual(1071.61);
  });
});
