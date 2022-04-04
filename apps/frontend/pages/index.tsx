import classNames from 'classnames';
import { NextPage } from 'next';
import Image from 'next/image';
import BaseTemplate from '../templates/BaseTemplate';

const HomePage: NextPage = () => {
  return (
    <BaseTemplate hasHero>
      <header className={classNames('relative', 'w-full', 'h-full', 'h-[75vh]')}>
        <Image
          src="/images/home-header.jpg"
          alt="eSports"
          layout="fill"
          objectFit="cover"
          priority
          className={classNames('grayscale', 'blur-sm')}
        />
      </header>
      <section
        className={classNames(
          'container',
          'grid',
          'grid-cols-1',
          'sm:grid-cols-3',
          'gap-x-0',
          'sm:gap-x-4',
          'gap-y-4',
          'items-center',
          'py-8'
        )}
      >
        <div className={classNames('justify-self-center', 'self-center')}>
          <Image
            src="/images/home-header.jpg"
            alt="eSports"
            width={300}
            height={300}
            objectFit="cover"
            className={classNames('rounded-xl')}
          />
        </div>
        <div className={classNames('col-span-2')}>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </section>
      <section className={classNames('bg-primary')}>
        <div className={classNames('container', 'grid', 'grid-cols-1', 'sm:grid-cols-3', 'gap-4', 'items-center', 'py-8')}>
          <div className={classNames('col-span-2')}>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className={classNames('justify-self-center')}>
            <Image
              src="/images/home-header.jpg"
              alt="eSports"
              width={300}
              height={300}
              objectFit="cover"
              className={classNames('rounded-xl')}
            />
          </div>
        </div>
      </section>
      <section className={classNames('container', 'grid', 'grid-cols-1', 'sm:grid-cols-3', 'gap-4', 'items-center', 'py-8')}>
        <div className={classNames('justify-self-center')}>
          <Image
            src="/images/home-header.jpg"
            alt="eSports"
            width={300}
            height={300}
            objectFit="cover"
            className={classNames('rounded-xl')}
          />
        </div>
        <div className={classNames('col-span-2')}>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </section>
      <section className={classNames('bg-primary')}>
        <div className={classNames('container', 'grid', 'grid-cols-1', 'sm:grid-cols-3', 'gap-4', 'items-center', 'py-8')}>
          <div className={classNames('col-span-2')}>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className={classNames('justify-self-center')}>
            <Image
              src="/images/home-header.jpg"
              alt="eSports"
              width={300}
              height={300}
              objectFit="cover"
              className={classNames('rounded-xl')}
            />
          </div>
        </div>
      </section>
    </BaseTemplate>
  );
};

export default HomePage;
