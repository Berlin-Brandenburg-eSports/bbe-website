import classNames from 'classnames';
import { NextPage } from 'next';
import { FaExclamationTriangle } from 'react-icons/fa';
import BaseTemplate from '../templates/BaseTemplate';

interface ErrorPageProps {
  statusCode: number;
  message?: string;
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode, message }) => {
  return (
    <BaseTemplate>
      <div className={classNames('flex', 'flex-col', 'justify-center', 'items-center', 'relative', 'pt-32')}>
        <FaExclamationTriangle size="4rem" />
        <div className={classNames('pt-2', 'text-2xl', 'font-mono')}>{statusCode}</div>
        {message && (
          <div className={classNames('mt-4', 'border', 'p-3', 'rounded', 'bg-black', 'bg-opacity-10', 'font-mono')}>{message}</div>
        )}
      </div>
    </BaseTemplate>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err?.statusCode ? err.statusCode : 404;
  const message = res ? res.statusMessage : err?.message && err.message;

  return { statusCode, message };
};

export default ErrorPage;
