import { createReducer } from '@reduxjs/toolkit';

import { setFilter } from './filterActions';

const filterReducer = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});
export default filterReducer;
