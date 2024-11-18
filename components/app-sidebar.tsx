'use client';

import * as React from 'react';
import {
  Calendar,
  LifeBuoy,
  Settings2,
  SquareCheck,
  Rocket,
  Home,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavProjects } from '@/components/nav-projects';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const data = {
  user: {
    name: 'John Doe',
    initials: 'JD',
    email: 'john.doe@example.com',
    avatar: '/profile.jpg',
  },
  navMain: [
    {
      title: 'Home',
      url: '/dashboard',
      icon: Home,
      // isActive: true,
      // items: [
      //   {
      //     title: 'History',
      //     url: '#',
      //   },
      //   {
      //     title: 'Starred',
      //     url: '#',
      //   },
      //   {
      //     title: 'Settings',
      //     url: '#',
      //   },
      // ],
    },
    {
      title: 'Tasks',
      url: '/tasks',
      icon: SquareCheck,
      // items: [
      //   {
      //     title: 'Genesis',
      //     url: '#',
      //   },
      //   {
      //     title: 'Explorer',
      //     url: '#',
      //   },
      //   {
      //     title: 'Quantum',
      //     url: '#',
      //   },
      // ],
    },
    {
      title: 'Calendar',
      url: '/calendar',
      icon: Calendar,
      // items: [
      //   {
      //     title: 'Introduction',
      //     url: '#',
      //   },
      //   {
      //     title: 'Get Started',
      //     url: '#',
      //   },
      //   {
      //     title: 'Tutorials',
      //     url: '#',
      //   },
      //   {
      //     title: 'Changelog',
      //     url: '#',
      //   },
      // ],
    },
  ],
  navSecondary: [
    {
      title: 'Support',
      url: '/support',
      icon: LifeBuoy,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings2,
    },
  ],
  projects: [
    {
      name: 'Apple Inc Design',
      url: '#',
      icon: Rocket,
    },
    {
      name: 'Google Project',
      url: '#',
      icon: Rocket,
    },
    {
      name: 'Microsoft Project',
      url: '#',
      icon: Rocket,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant='inset' collapsible='icon' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <a href='/dashboard'>
                <div className='flex aspect-square size-8 items-center justify-center rounded-full bg-[#2983bf] text-sidebar-primary-foreground'>
                  <Rocket className='size-4' />
                </div>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>Boost Flow</span>
                  {/* <span className='truncate text-xs'></span> */}
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className='mt-auto' />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
