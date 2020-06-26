import { randomEntities } from '../../utils/randomData';

const initialState = {
  rows: randomEntities(50),
  loading: false,
  hasFailed: false,
};

const gridReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_ROWS':
    case 'GET_MORE_ROWS':
      return {
        ...state,
        loading: true,
        hasFailed: false,
      };
    case 'GET_ROWS_SUCCESS':
      return {
        ...state,
        loading: false,
        rows: payload,
      };
    case 'GET_MORE_ROWS_SUCCESS':
      console.log('more rows success hola', payload);
      return {
        ...state,
        loading: false,
        rows: [...state.rows, ...payload],
      };
    case 'GET_ROWS_ERROR':
    case 'GET_MORE_ROWS_ERROR':
      return {
        ...state,
        loading: false,
        hasFailed: true,
      };
    default:
      return state;
  }
};

export default gridReducer;
