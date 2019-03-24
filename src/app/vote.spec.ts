import { Vote } from './vote';

describe('Vote', () => {
  it('should create an instance', () => {
    expect(new Vote(0,0)).toBeTruthy();
  });
});
