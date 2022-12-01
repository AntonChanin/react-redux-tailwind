import React, { FC, Fragment, useEffect, useState } from 'react';
import BookCard from '../components/BookCard';
import useAppSelector from '../hooks/redux';
import { BookModel } from '../models';
import { useLazySearchUsersQuery } from '../store/fakerApi/faker.api';

const FavoritesPage: FC = () => {
  const { favorites } = useAppSelector(state => state.faker);
  const [featchBook, { data: models, isLoading, isError }] = useLazySearchUsersQuery();
  const [books, setBooks] = useState<{ fav: string, model?: BookModel }[]>([]);

  useEffect(() => {
     const favoritesBook = favorites.map(
      (fav) => {
        const seedAndId = fav.split('__');
        const seed = seedAndId[0];
        const id = Number(seedAndId[1]);
        const model = models?.[id];

        featchBook(seed);

        return ({ fav, model });
      });
      setBooks(favoritesBook);
  }, [favorites]);

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && <p className="text-center text-red-600">Something went wrong...</p>}
      {favorites.length === 0 ? (
        <p className="text-center">No items.</p>
      ) : (
        <ul className="list-none">
          {!isLoading && books.map(({fav, model }) =>  (
            <Fragment key={fav}>{ model && <BookCard {...{ model }} />}</Fragment>
          ))}
        </ul>
      )}
      
    </div>
  );
};

export default FavoritesPage;
