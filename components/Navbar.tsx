import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={ styles[ 'menu-container' ] }>
      {
        menuItems.map(({ href, text }) => {
          return <ActiveLink href={ href } text={ text } key={ href } />;
        })
      }
    </nav>
  );
};
