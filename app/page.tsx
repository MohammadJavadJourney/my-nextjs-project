import Image from 'next/image';
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { Metadata } from 'next';

export default async function Home() {
  const session = await getServerSession(authOptions);
  const userName = session?.user?.name || 'World!';
  return (
    <main>
      <h1>Hello
        <span className='ml-3'>{userName}</span>
      </h1>
    </main>
  )
}

export const metadata: Metadata = {
  title:'...'
}