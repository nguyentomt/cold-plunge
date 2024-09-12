'use client';
import { usePathname } from 'next/navigation';
import Nav from './nav';

const NavWrapper = () => {
  const pathname = usePathname();

  const noNavRoutes = ['/book'];

  return (
    <>
      {!noNavRoutes.includes(pathname) && <Nav />}
    </>
  );
};

export default NavWrapper;
