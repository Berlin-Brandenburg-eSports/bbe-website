import classNames from 'classnames';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import '../styles.css';

function BBEApp({ Component, pageProps }: AppProps): JSX.Element {
  const title = 'Berlin Brandenburg eSports e.V.';
  const description = ''; // TODO: Description

  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | BBE`}
        defaultTitle={title}
        description={description}
        openGraph={{ type: 'website', title, description }}
      />
      <main className={classNames('flex', 'flex-col', 'min-h-screen')}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default BBEApp;
