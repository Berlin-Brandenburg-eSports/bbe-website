import { env } from '@bbe/types';
import { AuthService } from '@bbe/utils';
import classNames from 'classnames';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Button from '../../components/Button';
import BaseTemplate from '../../templates/BaseTemplate';

const LoginPage: NextPage = () => {
  return (
    <BaseTemplate title="Login">
      <div className={classNames('flex', 'flex-col', 'justify-center', 'items-center', 'absolute', 'inset-0')}>
        <Image src="/bbe-logo.png" alt="BBE" width={200} height={200} />
        <Button href={`${env.API_URL}/v1/auth/login`}>Login With Discord</Button>
      </div>
    </BaseTemplate>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const redirect = await AuthService.shouldRedirect(context);

  if (!redirect) {
    return { redirect: { destination: '/konto', permanent: false }, props: {} };
  }

  return { props: {} };
};

export default LoginPage;
