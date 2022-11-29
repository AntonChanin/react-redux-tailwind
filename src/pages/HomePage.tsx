import React, { FC, useState } from 'react';
import { useSearchUsersQuery } from '../store/fakerApi/faker.api';

const HomePage: FC = () => {
  const [search, setSearch] = useState('');
  const { isLoading, isError, data } = useSearchUsersQuery('5');

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && <p className="text-center text-red-600">Something went wrong...</p>}
      <div className="relative w-[560px]">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search for faker username..."
        />
        <div className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
        Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc., li tot Europa usa li sam vocabularium. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilit? de un nov lingua franca: on refusa continuar payar custosi traductores. It solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.Li Europan lingues es membres del sam familie. Lor separat existent
        </div>
      </div>
    </div>
  );
};

export default HomePage;
   