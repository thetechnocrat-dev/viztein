import {
  SET_COLOR_CHOICE,
  SET_REPRESENTATION_CHOICE
} from './actions';

import { colorChoices, representationChoices } from 'views/Demo/constants';

export const getInitialState = () => ({
  colorValue: colorChoices[0].value,
  representationValue: representationChoices[0].value,
});

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case SET_COLOR_CHOICE:
      return {
        ...state,
        colorValue: action.value
      }
    case SET_REPRESENTATION_CHOICE:
      return {
        ...state,
        representationValue: action.value
      }
    default:
      return state;
  }
};
