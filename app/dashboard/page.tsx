import { AppSidebar } from '@/components/app-sidebar';
import { ModeToggle } from '@/components/modeToggle';
import { Button } from '@/components/ui/button';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { masterTaskList, projectsList } from '@/lib/data';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SquareCheck } from 'lucide-react';

type MasterTask = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: string;
};

export default function Page() {
  const tasks: MasterTask[] = masterTaskList;
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator orientation='vertical' className='mr-2 h-4' />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <ModeToggle />
        <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4'>
            <h2>Welcome John Doe</h2>
            <Table>
              <TableCaption className='hidden'>
                A list of all your tasks
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[50px]'>
                    <SquareCheck size={15} />
                  </TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Priority</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks
                  .filter((task) => task.priority === 'high')
                  .map((task) => (
                    <TableRow key={task.id}>
                      <TableCell>
                        <input type='checkbox' />
                      </TableCell>
                      <TableCell>{task.title}</TableCell>
                      <TableCell>{task.description}</TableCell>
                      <TableCell
                        className={`text-black text-center ${
                          task.priority === 'high'
                            ? 'bg-red-400'
                            : task.priority === 'medium'
                            ? 'bg-yellow-400'
                            : 'bg-green-400'
                        }`}
                      >
                        {task.priority.charAt(0).toUpperCase() +
                          task.priority.slice(1)}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
          <div className='grid auto-rows-min gap-4 md:grid-cols-2'>
            <div className='aspect-video rounded-xl bg-muted/50 p-4'>
              <h2>Projects</h2>
              <Table>
                <TableCaption className='hidden'>
                  A list of all your projects
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projectsList.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell>{project.name}</TableCell>
                      <TableCell className='text-right'>
                        <Button>View Project</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className='aspect-video rounded-xl bg-muted/50 p-4'>
              <h2>Low Priority Tasks</h2>
              <Table>
                <TableCaption className='hidden'>
                  A list of all your tasks
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-[50px]'>
                      <SquareCheck size={15} />
                    </TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Priority</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks
                    .filter((task) => task.priority === 'low')
                    .map((task) => (
                      <TableRow key={task.id}>
                        <TableCell>
                          <input type='checkbox' />
                        </TableCell>
                        <TableCell>{task.title}</TableCell>
                        <TableCell>{task.description}</TableCell>
                        <TableCell
                          className={`text-black text-center ${
                            task.priority === 'high'
                              ? 'bg-red-400'
                              : task.priority === 'medium'
                              ? 'bg-yellow-400'
                              : 'bg-green-400'
                          }`}
                        >
                          {task.priority.charAt(0).toUpperCase() +
                            task.priority.slice(1)}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
