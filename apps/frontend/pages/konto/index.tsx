import { User } from '@bbe/types';
import classNames from 'classnames';
import { GetServerSideProps, NextPage } from 'next';
import Router from 'next/router';
import Button from '../../components/Button';
import { env } from '../../configs/env.config';
import AuthService from '../../services/auth.service';
import UserService from '../../services/user.service';
import BaseTemplate from '../../templates/BaseTemplate';

interface AccountPagePros {
  user: User;
}

const AccountPage: NextPage<AccountPagePros> = ({ user }) => {
  const handleLogout = async (): Promise<void> => {
    await UserService.logout();
    Router.push('/');
  };

  return (
    <BaseTemplate>
      <div className={classNames('container')}>
        <h1>Hello, {user.nick}</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </BaseTemplate>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = AuthService.getCookies(context);
    const user = await UserService.getMe(cookies);

    return { props: { user } };
  } catch (error) {
    return {
      redirect: {
        destination: `${env.API_URL}/v1/auth/login`,
        permanent: false,
      },
    };
  }
};

export default AccountPage;
