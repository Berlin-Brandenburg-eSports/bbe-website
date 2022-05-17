import { useDepartments } from '@bbe/utils';
import { FC } from 'react';

const TeamsPage: FC = () => {
  const { data: departments = [] } = useDepartments();

  return (
    <div>
      <h1>Departments</h1>
      {departments.map(({ name }) => (
        <p>{name}</p>
      ))}
    </div>
  );
};

export default TeamsPage;
