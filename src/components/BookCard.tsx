import React, { FC, useState } from 'react';
import useActions from '../hooks/action';
import useAppSelector from '../hooks/redux';
import { BookModel } from '../models';

type Props = {
  seed?: string;
  model: BookModel;
  actions?: string[];
}

const BookCard: FC<Props> = (props) => {
  const { seed, model, actions = ['Add', 'Remove']  } = props;
  const { id, title, author, genre, description, isbn, image, published, publisher } = model;
  
  const { addFavorite, removeFavorite } = useActions();
  const { favorites } = useAppSelector(state => state.faker);

  const [isFav, setFav] = useState(favorites.includes(`${seed}__${id}`));


  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    addFavorite(`${seed}__${id}`);
    setFav(true);
  }

  const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    removeFavorite(`${seed}__${id}`);
    setFav(false);
  } 

  return (
    <div
      className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all"
    >
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm">
        Author: <span className="font-bold mr-2">{author}</span>
        Genre: <span className="font-bold">{genre}</span>
      </p>
      <p className="text-sm">
        Published: <span className="font-bold mr-2">{published}</span>
        Publisher: <span className="font-bold">{publisher}</span>
      </p>
      <div className="flex">
        <p className="text-sm font-thin">{description}</p>
        <img className="m-auto w-[150px] h-[200px]" alt="" src={image} />
      </div>
      {actions.includes('Add') && !isFav &&
        <button
          className="py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all"
          onClick={addToFavorite}
        >
          Add
        </button>
      }
      {actions.includes('Remove') && isFav &&
        <button
          className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
          onClick={removeFromFavorite}
        >
          Remove
        </button>
      }
    </div>
  );
};

export default BookCard;
