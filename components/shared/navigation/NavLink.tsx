'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const NavLink = ({
  id,
  href,
  label,
  classes,
  isMobile,
  onClick,
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      id={id}
      href={href}
      className={cn(
        'transition-colors duration-300 hover:text-orange-500',
        isActive && 'text-orange-500',
        isMobile && 'text-2xl',
        classes
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default NavLink;
