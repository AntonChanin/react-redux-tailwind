import React, { FC } from 'react';
import { useSearchUsersQuery } from '../store/fakerApi/faker.api';

const HomePage: FC = () => {
  const { isLoading, isError, data } = useSearchUsersQuery('5');
  return (isLoading && !isError ? <div>Home {data}</div> : null);
};

export default HomePage;
   