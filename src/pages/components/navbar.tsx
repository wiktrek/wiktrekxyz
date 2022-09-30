import styles from '../../styles/navbar.module.scss';
import type { AppProps } from 'next/app';
import Link from 'next/link';
function Navbar() {
  return (
    <>
      <div className={styles.nav}>
        <a href="https://www.wiktrek.xyz/" target="__blank">
          wiktrek.xyz
        </a>
        <ul className={styles.navlinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
        <Link href="/links">Links</Link>
      </div>
    </>
  );
}

export default Navbar;
