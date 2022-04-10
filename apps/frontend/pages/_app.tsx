import axios from 'axios';
import classNames from 'classnames';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { env } from '../configs/env.config';
import '../styles.css';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = `${env.API_URL}/v1`;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const title = 'Berlin-Brandenburg eSports e.V.';
  const description = 'We are ready';

  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | BBE`}
        defaultTitle={title}
        description={description}
        openGraph={{ type: 'website', title, description }}
        twitter={{ site: '@bbesports_ev', handle: '@bbesports_ev', cardType: 'summary' }}
      />
      <NextNProgress color="#e8175d" options={{ showSpinner: false }} height={2} />
      <main className={classNames('flex', 'flex-col', 'min-h-screen')}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
