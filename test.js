import test from 'ava';
import parser from './index'
import fs from 'fs';

test('sync-parse', t => {
  const sampleData = fs.readFileSync('./hn.html');
  const expectedResult = JSON.parse(fs.readFileSync('./test_output.json'));
  const items = parser.parse(sampleData);
  t.deepEqual(items, expectedResult)
});

test('async-parse', t => {
  const sampleData = fs.readFileSync('./hn.html');
  parser.parseAsync(sampleData, (items) => {
    const expectedResult = JSON.parse(fs.readFileSync('./test_output.json'));
    t.deepEqual(items, expectedResult)
  });
});