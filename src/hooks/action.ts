import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { fakerActions } from '../store/fakerApi/faker.slice';
import { searchActions } from '../store/searchReducer';

const actions = {
  ...fakerActions,
  ...searchActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
}

export default useActions;
