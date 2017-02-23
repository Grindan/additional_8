# Strange clock

## Task

Let's imagine:
  1) We have digital watch
  2) Our watch uses 7th system base
  3) We divide our day on `hours` hours and `minutes` minutes
  4) Watch is divided on 2 parts - first for hours, second - for minutes.
  5) Each part contains the number of digits for showing all possible values of hours(minutes)
  6) If number of digits of current hours or minutes is less then max possible, the left digits will be `0`
  7) Input parameters are in the 10th base system

Your task is to calculate how many times a day all digits on watch are different.

Example:

```js
howMany(2 /*hours*/, 3 /*minutes*/); // -> 4 : (0: 1), (0: 2), (1: 0), (1: 2)
howMany(8 /*hours*/, 2 /*minutes*/); // -> 5 : (02: 1), (03: 1), (04: 1), (05: 1), (06: 1)
```

Write your code in `src/index.js`
