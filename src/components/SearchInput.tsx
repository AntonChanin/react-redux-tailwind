import React, { useEffect, useState } from 'react';
import useActions from '../hooks/action';

import useDebounce from '../hooks/debounce';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const { setSearch: setNewSearch } = useActions();

  
  useEffect(() => {
    setDropdown(!!debounced.length);
  }, [debounced]);

  const clickHandler = (newSearch: string) => {
    setSearch(newSearch);
    setNewSearch(newSearch);
  };

  return (
    <div className="flex items-baseline">
      <h3 className="mr-5 font-bold">Seed</h3>
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
            {!debounced ? (
              <p className="text-center">Loading...</p>
            ) : (
              Array.from(Array(10).keys()).map((value) => value + +debounced - 5).map((newSearch, index) => (
                <li
                  key={`${index}_${newSearch}`}
                  className="py-2 px-4 hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => clickHandler(`${newSearch}`)}
                >
                  {newSearch}
                </li>
              ))
            )}
          </ul>
        }
      </div>
    </div>
  );
};

export default SearchInput;
