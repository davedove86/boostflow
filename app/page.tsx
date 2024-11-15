import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>BoostFlow</h1>
      <Link href='/dashboard'>
        <button>View Dashboard</button>
      </Link>
    </div>
  );
}
