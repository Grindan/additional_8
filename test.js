const assert = require('assert');
const howMany = require('./src/index.js');

it('should calculate different combinations 1', () => {
  assert.equal(howMany(2, 3), 4);
});

it('should calculate different combinations 2', () => {
  assert.equal(howMany(8, 2), 5);
});

it('should calculate different combinations 3', () => {
  assert.equal(howMany(10, 10), 8);
});

it('should calculate different combinations 4', () => {
  assert.equal(howMany(5, 5), 20);
});

it('should calculate different combinations 5', () => {
  assert.equal(howMany(4, 6), 20);
});

it('should calculate different combinations 6', () => {
  assert.equal(howMany(6, 7), 36);
});

it('should calculate different combinations 7', () => {
  assert.equal(howMany(8, 7), 35);
});

it('should calculate different combinations 8', () => {
  assert.equal(howMany(8, 8), 0);
});

it('should calculate different combinations 9', () => {
  assert.equal(howMany(11, 11), 16);
});

it('should calculate different combinations 10', () => {
  assert.equal(howMany(13, 7), 55);
});

it('should calculate different combinations 11', () => {
  assert.equal(howMany(20, 20), 104);
});

it('should calculate different combinations 12', () => {
  assert.equal(howMany(21, 21), 120);
});

it('should calculate different combinations 13', () => {
  assert.equal(howMany(35, 34), 384);
});

it('should calculate different combinations 14', () => {
  assert.equal(howMany(55, 55), 0);
});

it('should calculate different combinations 15', () => {
  assert.equal(howMany(312, 551), 959);
});

it('should calculate different combinations 16', () => {
  assert.equal(howMany(223, 222), 1962);
});

it('should calculate different combinations 17', () => {
  assert.equal(howMany(423, 222), 476);
});

it('should calculate different combinations 18', () => {
  assert.equal(howMany(423, 322), 780);
});

it('should calculate different combinations 19', () => {
  assert.equal(howMany(333, 444), 832);
});

it('should calculate different combinations 20', () => {
  assert.equal(howMany(234, 345), 444);
});
