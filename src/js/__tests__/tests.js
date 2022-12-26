import phones from '../app';

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
  ['+4720 354 879 1247', '+47203548791247'],
])('regexp', (obj, expected) => {
  const result = phones(obj);
  expect(result).toBe(expected);
});
