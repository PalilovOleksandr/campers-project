'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './Header.module.css';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <Link href="/" className={css.logo} aria-label="Home">
        <svg className={css.logoIcons}>
          <use href="/icons/sprite.svg#logo"></use>
        </svg>
      </Link>

      <nav className={css.navigation}>
        <ul className={css.navigationList}>
          <li>
            <Link
              href="/"
              aria-label="Home"
              className={pathname === '/' ? css.active : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/catalog"
              aria-label="Catalog"
              className={pathname === '/catalog' ? css.active : ''}
            >
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
