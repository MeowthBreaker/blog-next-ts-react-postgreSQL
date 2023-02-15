import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Header } from '@/components/Header/Header';
import About from './About/About';

export default function Home() {
    return (
        <>
            <Head>
                <title>Main Blog Page</title>
                <meta name='description' content='Pet-project for next-ssr and ts-react' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <Header />
                <About />
            </main>
        </>
    );
}
