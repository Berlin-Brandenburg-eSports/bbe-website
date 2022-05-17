import { useGames } from '@bbe/utils';
import { FC } from 'react';

const GamesPage: FC = () => {
  const { data: games = [] } = useGames();

  return (
    <div>
      <h1>Spiele</h1>
      {games.map(({ name }) => (
        <p>{name}</p>
      ))}
    </div>
  );
};

export default GamesPage;
