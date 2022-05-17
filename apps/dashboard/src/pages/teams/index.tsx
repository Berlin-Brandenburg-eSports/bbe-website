import { useTeams } from '@bbe/utils';
import { FC } from 'react';

const TeamsPage: FC = () => {
  const { data: teams = [] } = useTeams();

  return (
    <div>
      <h1>Teams</h1>
      {teams.map(({ name }) => (
        <p>{name}</p>
      ))}
    </div>
  );
};

export default TeamsPage;
