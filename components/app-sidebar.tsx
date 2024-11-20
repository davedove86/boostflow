'use client';

import * as React from 'react';
import {
  Calendar,
  LifeBuoy,
  Settings2,
  SquareCheck,
  Home,
  BadgeCheck,
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
import { projectsList } from '@/lib/data'; // Adjust the import path as necessary
import { LucideIcon } from 'lucide-react';

type Projects = {
  id: number;
  name: string;
  url: string;
  icon: LucideIcon;
  pinned: boolean;
};

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
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const projects: Projects[] = projectsList;
  return (
    <Sidebar variant='inset' collapsible='icon' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <a href='/dashboard'>
                <div className='flex aspect-square size-8 items-center justify-center rounded-full bg-[#2983bf] text-sidebar-primary-foreground'>
                  <BadgeCheck className='size-4' />
                </div>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>TaskSync</span>
                  <span className='truncate text-xs'>Sync your todos</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={projects.filter((project) => project.pinned)} />
        <NavSecondary items={data.navSecondary} className='mt-auto' />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
