import { FC } from 'react';
import { useDepartments } from '../../services/department.service';

const DepartmentsPage: FC = () => {
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

export default DepartmentsPage;
