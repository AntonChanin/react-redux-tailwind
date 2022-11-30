import React, { FC, useEffect, useState } from 'react';
import useDebounce from '../hooks/debounce';
import { useSearchUsersQuery } from '../store/fakerApi/faker.api';

const HomePage: FC = () => {
  const [search, setSearch] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const { isLoading, isError, data: books } = useSearchUsersQuery(debounced, {
    skip: debounced.length === 0 && !(!!Number(debounced)),
    refetchOnFocus: true,
  });

  useEffect(() => {
    setDropdown(!!debounced.length);
  }, [debounced, books]);

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && <p className="text-center text-red-600">Something went wrong...</p>}
        <div className="flex items-baseline">
          <h3>Seed</h3>
          <div className="relative w-[560px]">
            <input
              type="text"
              className="border py-2 px-4 w-full h-[42px] mb-2"
              placeholder="Search for faker username..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {
              dropdown && <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll">
                {isLoading ? (
                  <p className="text-center">Loading...</p>
                ) : (
                  books?.map(({ id, author, title }) => (<li key={`${id}_${author}`} className="py-2 px-4 hover:bg-gray-100 transition-colors cursor-pointer">{title}</li>))
                )}
              </ul>
            }
          </div>
        </div>
      
    </div>
  );
};

export default HomePage;
   