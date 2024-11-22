import Image from 'next/image';
import image from '@/public/images/image.jpg';
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello
        {session && <span className='ml-4'>{session.user!.name}</span>}
        {!session && <span className='ml-4'>World!</span>}
      </h1>
      <Image src='image' alt='coffee' />
    </main>
  )
}
