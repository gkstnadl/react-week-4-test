import {
  ADD_FAN_LETTER,
  UPDATE_FAN_LETTER,
  DELETE_FAN_LETTER,
  SET_MODAL_VISIBILITY,
  SET_MODAL_MESSAGE
} from './actionTypes';


const initialState = {
  fanLetters: JSON.parse(localStorage.getItem('fanLetters')) || {},
  showModal: false,
  modalMessage: ''
};

export const fanLetterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAN_LETTER:
      const { member } = action.payload;
      const newFanLetters = {
        ...state.fanLetters,
        [member]: [
          ...(state.fanLetters[member] || []),
          {
            nickname: action.payload.nickname,
            content: action.payload.content,
            color: action.payload.color,
          }
        ]
      };

      return {
        ...state,
        fanLetters: newFanLetters
      };

    case UPDATE_FAN_LETTER:
      const { id, newContent } = action.payload;
      const updatedFanLetters = { ...state.fanLetters };
      Object.keys(updatedFanLetters).forEach(member => {
        updatedFanLetters[member] = updatedFanLetters[member].map(letter => {
          if (letter.id === id) {
            return { ...letter, content: newContent };
          }
          return letter;
        });
      });

      return {
        ...state,
        fanLetters: updatedFanLetters
      };

    case DELETE_FAN_LETTER:
      const updatedFanLettersForDelete = { ...state.fanLetters };
      for (const member in updatedFanLettersForDelete) {
        updatedFanLettersForDelete[member] = updatedFanLettersForDelete[member].filter(
          (letter) => letter.id !== action.payload
        );
      }
      return {
        ...state,
        fanLetters: updatedFanLettersForDelete
      };

    case SET_MODAL_VISIBILITY:
      return {
        ...state,
        showModal: action.payload
      };

    case SET_MODAL_MESSAGE:
      return {
        ...state,
        modalMessage: action.payload
      };

    default:
      return state;
  }
};

export default fanLetterReducer;
