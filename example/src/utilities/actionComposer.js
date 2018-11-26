import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

/*
Extends the `base` action type with `redux-promise-middleware`
action prefixes and returns an object with the fields representing
base and extended action types.
*/
export default base =>
  [PENDING, FULFILLED, REJECTED].reduce(
    (acc, type) => {
      acc[type] = `${base}_${type}`;
      return acc;
    },
    { type: base }
  );
