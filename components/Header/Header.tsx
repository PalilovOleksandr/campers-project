'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './Header.module.css';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        <Image
          src="/icons/company-logo.svg"
          alt="company logo"
          width={136}
          height={16}
          className={css.logo}
        />
      </Link>

      <nav>
        <ul className={css.navigation}>
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
