'use client';

import { useUser } from '@clerk/nextjs';
import Link from 'next/link';

import MobileNav from '@/components/shared/navigation/MobileNav';
import NavLink from '@/components/shared/navigation/NavLink';
import { ThemeToggle } from '@/components/shared/navigation/ThemeToggle';
import SiteLogo from '@/components/shared/SiteLogo';
import { NAV_LINKS } from '@/constants';

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className='flex items-center justify-between py-4'>
      <SiteLogo href='/' />

      {/* Desktop Navigation */}
      <div className='hidden items-center gap-4 sm:flex'>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.id}
            {...link}
          />
        ))}
        {!user ? (
          <Link
            href='/sign-in'
            className='transition-colors duration-300 hover:text-orange-500'
          >
            Login
          </Link>
        ) : (
          <Link
            href='/dashboard'
            className='transition-colors duration-300 hover:text-orange-500'
          >
            Dashboard
          </Link>
        )}

        <ThemeToggle />
      </div>

      {/* Mobile Navigation */}
      <div className='flex sm:hidden'>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
