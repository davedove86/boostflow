import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from '@/components/modeToggle';

export default function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <ModeToggle />
      <div className='flex flex-col justify-center items-center gap-6 max-w-80 text-center'>
        <Image
          src='/tasksync-logo.svg'
          alt='TaskSync Logo'
          width={100}
          height={100}
        ></Image>
        <h1 className='text-3xl font-bold'>TaskSync</h1>
        <p>
          Unleash Your Potential and Stay Ahead with Effortless Task Management
        </p>

        <Link href='/dashboard'>
          <button className='bg-[#2883BF] text-white py-2 px-4 rounded'>
            View Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
