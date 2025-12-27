import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const SiteLogo = ({
  href,
  text = 'Tech Forum',
  classes,
  imgSrc = '/assets/images/logo.png',
  imgAlt = 'Tech Forum Logo',
  imgWidth = 40,
  imgHeight = 40,
  imgClasses,
  onClick,
  isSidebar,
}: SiteLogoProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 text-2xl font-semibold text-orange-500',
        isSidebar && 'text-lg',
        classes
      )}
      onClick={onClick}
    >
      {!isSidebar ? (
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={imgWidth}
          height={imgHeight}
          className={cn('', imgClasses)}
        />
      ) : (
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={30}
          height={30}
          className={cn('', imgClasses)}
        />
      )}
      <span>{text}</span>
    </Link>
  );
};

export default SiteLogo;
