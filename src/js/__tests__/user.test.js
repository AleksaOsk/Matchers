import { loadUser, saveUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http.js');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('loadUser', () => {
  test('should load user correctly', () => {
    const mockUser = { id: 1, name: 'Test User' };
    httpGet.mockReturnValue(JSON.stringify(mockUser));

    const user = loadUser(1);
    expect(user).toEqual(mockUser);
    expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
  });

  test('should handle invalid JSON', () => {
    httpGet.mockReturnValue('invalid json');

    expect(() => loadUser(1)).toThrow();
  });
});

describe('saveUser', () => {
  test('should throw error when called', () => {
    expect(() => saveUser({})).toThrow('Unimplemented');
  });
});
