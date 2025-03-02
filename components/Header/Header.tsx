import Link from 'next/link';

export default function Header() {
  return (
    <div className="h-[5rem] p-2 flex flex-row items-center gap-2 bg-neutral-600">
      <Link href={'/'}>Home</Link>
      <Link href={'/services'}>Services</Link>
      <Link href={'/about'}>About</Link>
    </div>
  );
}
