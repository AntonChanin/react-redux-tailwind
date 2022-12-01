import React, { FC, Fragment, useEffect, useState } from 'react';

import BookCard from '../components/BookCard';
import MessageLog from '../components/MessageLog';
import useAppSelector from '../hooks/redux';
import { BookModel } from '../models';
import { useLazySearchUsersQuery } from '../store/fakerApi/faker.api';

const FavoritesPage: FC = () => {
  const { favorites } = useAppSelector((state) => state.faker);
  const [featchBook, { data: models, isLoading, isError }] = useLazySearchUsersQuery();
  const [books, setBooks] = useState<{ fav: string, seed: string, model?: BookModel }[]>([]);

  useEffect(() => {
     const favoritesBook = favorites.map(
      (fav) => {
        const seedAndId = fav.split('__');
        const seed = seedAndId[0];
        const id = Number(seedAndId[1]);
        const model = models?.[id];

        featchBook(seed);

        return ({ fav, seed, model });
      });
      setBooks(favoritesBook);
  }, [favorites, featchBook, models]);

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {favorites.length === 0 ? (
        <MessageLog value="No items." />
      ) : (
        <ul className="flex flex-col max-w-[615px] list-none">
          {isError && <p className="text-center text-red-600">Something went wrong...</p>}
          {!isLoading && books.map(({ fav, seed, model }) =>  (
            <Fragment key={`${model?.isbn}_${fav}`}>{ model && <BookCard {...{ actions: ['Remove'], seed, model }} />}</Fragment>
          ))}
        </ul>
      )}
      
    </div>
  );
};

export default FavoritesPage;
