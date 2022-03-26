import { Pages } from '@bbe/types';
import classNames from 'classnames';
import { NextSeo, NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

interface BaseTemplateProps {
  seo?: NextSeoProps;
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

const BaseTemplate: FC<BaseTemplateProps> = ({ children, seo }) => {
  const { pathname } = useRouter();

  const pageData = Pages.find(({ href }) => pathname.length > 2 && href.includes(pathname));
  const pageSeo = generateSeo({ title: pageData?.title, description: pageData?.description, ...seo });

  return (
    <>
      <NextSeo {...generateSeo(pageSeo)} />
      <header>
        <Navbar />
      </header>
      <main className={classNames('flex-grow')}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default BaseTemplate;
