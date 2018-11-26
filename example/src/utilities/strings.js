import moment from 'moment';

/**
 * Uppercase the first letter in a string
 */
export const ucFirst = str =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

/**
 * Uppercase the first letter of each word in a string
 */
export const ucFirstOfEachWord = str =>
  str
    ? str
        .split(' ')
        .map(word => ucFirst(word))
        .join(' ')
    : '';

/**
 * Replace underscores in string with spaces
 */
export const underscoreToSpace = str => str ? str.replace(/_/g, ' ') : '';

/**
 * Formats Django timestamp YYYY-MM-DDThh:mm:ss.mmmm to YYYY-MM-DD
 */
export const timestampToDate = timestamp =>
  timestamp ? moment(timestamp).format('YYYY-MM-DD') : '';
