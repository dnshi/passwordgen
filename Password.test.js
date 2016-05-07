'use strict';

const test = require('tape');
const Password = require('./Password');

const pw = new Password;

test('Gen a short password', (t) => {
  const spw = pw.shortPassword();
  t.equal(spw.length, 3, `A short password: ${spw}`);
  t.end();
});

test('Gen a long password', (t) => {
  const lpw = pw.longPassword();
  const apw = pw.longPassword();

  t.equal(lpw.length, 25, `A long password: ${lpw}`);
  t.equal(apw.length, 25, `Another long passowrd: ${apw}`);
  t.end();
});

test('Assume I am trying to break into a system which has the password: dog', (t) => {
  let count = 0;
  while (pw.nextPassword() !== 'dog') {
    count++;
  }

  t.equal(count, 2398, `It would take me 2398 guesses to break in.`);
  t.end();
});

test('Total number of possible 3 lower case letter passwords', (t) => {
  let count = 0;
  pw.reset();

  while(pw.nextPassword() !== '???') {
    count++;
  }

  t.equal(count, 17576, 'Should be 17576');
  t.end();
});
