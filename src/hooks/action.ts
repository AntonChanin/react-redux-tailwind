import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { fakerActions } from '../store/fakerApi/faker.slice';

const actions = {
  ...fakerActions
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
}

export default useActions;
