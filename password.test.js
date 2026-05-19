import { checkPassword } from './password.js';

describe('checkPassword', () => {
  test('hyväksyy kelvollisen salasanan', () => {
    expect(checkPassword('Testi1234!')).toBe(true);
  });

  test('hylkää liian lyhyen salasanan', () => {
    expect(checkPassword('Ab1!')).toBe(false);
  });

  test('hylkää salasanan ilman isoa kirjainta', () => {
    expect(checkPassword('testi1234!')).toBe(false);
  });

  test('hylkää salasanan ilman pientä kirjainta', () => {
    expect(checkPassword('TESTI1234!')).toBe(false);
  });

  test('hylkää salasanan ilman numeroa', () => {
    expect(checkPassword('TestiTest!')).toBe(false);
  });

  test('hylkää salasanan ilman erikoismerkkiä', () => {
    expect(checkPassword('Testi12345')).toBe(false);
  });
});
