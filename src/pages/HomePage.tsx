import React, { FC } from 'react';
import BookCard from '../components/BookCard';
import ErrorLog from '../components/ErrorLog';
import MessageLog from '../components/MessageLog';
import SearchInput from '../components/SearchInput';
import useAppSelector from '../hooks/redux';
import { useSearchUsersQuery } from '../store/fakerApi/faker.api';

const HomePage: FC = () => {
  const { search } = useAppSelector(state => state.searchString);
  const { isLoading, isError, data: books } = useSearchUsersQuery(search, {
    skip: search.length === 0 && !(!!Number(search)),
    refetchOnFocus: true,
  });

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <div className="flex flex-col max-w-[615px]">
        <SearchInput />
        <div className="container">
          {isError && <ErrorLog />}
          {isLoading &&  <MessageLog />}
          {books ? (
            books.map(
              (book) => (
                search && <BookCard key={`${book.id}__${book.author}`} {...{ seed: search, model: book }} />
              )
            )
          ) : (
            <MessageLog value="Book not found..." />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
   