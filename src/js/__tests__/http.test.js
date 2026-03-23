import { httpGet, httpPost } from '../http';

describe('http functions', () => {
  test('httpGet should throw error with url', () => {
    expect(() => httpGet('http://test.com')).toThrow('http://test.com');
  });

  test('httpPost should throw error with url', () => {
    expect(() => httpPost('http://test.com')).toThrow('http://test.com');
  });
});
