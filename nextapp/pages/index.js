import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
       <main className={styles.main}>
        <form>
          <h1>Home Page</h1>

          <button className={styles.button} type="submit">
          <Link href='/login'>Sign in</Link>
          
            </button>
            <button className={styles.button} type="submit">
          <Link href='/registration'>Register here</Link>
          
            </button>
        </form>
      </main>
    </>
  )
}
