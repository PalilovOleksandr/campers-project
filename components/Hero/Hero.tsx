import Link from 'next/link';
import Button from '../UI/Buttons/Buttons';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <section className={css.section}>
      <div>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <Link href="/catalog">
          <Button variant="primary" size="large">
            View Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
