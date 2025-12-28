'use client';

import { SignOutButton, UserButton, useUser } from '@clerk/nextjs';
import { ChevronUp, User2 } from 'lucide-react';

import SiteLogo from '@/components/shared/SiteLogo';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { DASHBOARD_NAV_LINKS } from '@/constants';

export function AppSidebar() {
  const { user } = useUser();

  return (
    <Sidebar>
      <SidebarHeader className='bg-gray-800/30 pt-4'>
        <SiteLogo
          href='/dashboard'
          isSidebar
        />
      </SidebarHeader>
      <SidebarContent className='bg-gray-800/30'>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {DASHBOARD_NAV_LINKS.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className='bg-gray-800/30'>
        <SidebarMenu>
          <SidebarMenuItem className='flex items-center gap-2'>
            <UserButton />
            <span className='text-md'>
              {user?.firstName} {user?.lastName}
            </span>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
