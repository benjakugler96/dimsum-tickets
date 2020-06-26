export const getRows = () => ({
  type: 'GET_ROWS',
});
export const getRowsSuccess = (payload) => ({
  type: 'GET_ROWS',
  payload,
});

export const getMoreRowsSuccess = (payload) => ({
  type: 'GET_MORE_ROWS_SUCCESS',
  payload,
});
