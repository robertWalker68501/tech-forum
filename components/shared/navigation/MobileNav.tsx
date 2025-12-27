'use client';

import { useState } from 'react';

import { MenuIcon } from 'lucide-react';

import NavLink from '@/components/shared/navigation/NavLink';
import SiteLogo from '@/components/shared/SiteLogo';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAV_LINKS } from '@/constants';

const MobileNav = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  const closeSheet = () => {
    setSheetOpen(false);
  };

  return (
    <Sheet
      open={sheetOpen}
      onOpenChange={setSheetOpen}
    >
      <SheetTrigger>
        <MenuIcon size={24} />
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>
            <SiteLogo
              href='/'
              onClick={closeSheet}
            />
          </SheetTitle>
          <SheetDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            ex iure labore reiciendis sequi! Asperiores consequuntur deleniti
            error est nesciunt.
          </SheetDescription>
        </SheetHeader>
        <div className='flex flex-col gap-4 px-4'>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.id}
              id={link.id}
              href={link.href}
              label={link.label}
              isMobile
              onClick={closeSheet}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
