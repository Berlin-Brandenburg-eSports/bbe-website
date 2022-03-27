import { NextPage } from 'next';
import ErrorPage from './_error';

const NotFoundPage: NextPage = () => {
  return <ErrorPage statusCode={404} message={'Die Seite konnte nicht gefunden werden!'} />;
};

export default NotFoundPage;
