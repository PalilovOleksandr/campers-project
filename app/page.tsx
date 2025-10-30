import css from './page.module.css';
import Button from '@/components/UI/Buttons/Buttons';
import Link from 'next/link';

export default function Home() {
  return (
    <section className={css.section}>
      <div>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <Link href="/catalog" className={css.link}>
          <Button variant="primary" size="large">
            View Now
          </Button>
        </Link>
      </div>
    </section>
  );
}
