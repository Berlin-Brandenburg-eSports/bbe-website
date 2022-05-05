import classNames from 'classnames';
import { NextSeo, NextSeoProps } from 'next-seo';
import { FC, PropsWithChildren } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

interface BaseTemplateProps extends Pick<NextSeoProps, 'title' | 'description'> {
  hasHero?: boolean;
}

function generateSeo(seo: NextSeoProps): NextSeoProps {
  const { title, description, ...rest } = seo;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...seo?.openGraph,
    },
    ...rest,
  };
}

const BaseTemplate: FC<PropsWithChildren<BaseTemplateProps>> = ({ children, hasHero, ...seo }) => {
  const pageSeo = generateSeo(seo);

  return (
    <>
      <NextSeo {...generateSeo(pageSeo)} />
      <header>
        <Navbar />
      </header>
      <main className={classNames('flex-grow', 'relative', { 'pt-16': !hasHero })}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default BaseTemplate;
