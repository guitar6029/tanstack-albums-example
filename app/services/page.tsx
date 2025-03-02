import Link from 'next/link';

export default function Services() {
  return (
    <div>
      <h1>Services</h1>
      <Link href={'/services/1'}>Go to first service</Link>
    </div>
  );
}
